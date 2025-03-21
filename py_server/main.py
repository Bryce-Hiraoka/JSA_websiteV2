from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import csv
import json
from collections import defaultdict


UPLOAD_DIR = Path() / 'uploads'

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.post('/upload/')
async def create_upload_file(file_upload: UploadFile):
    data = await file_upload.read()
    save_to = UPLOAD_DIR / file_upload.filename
    with open(save_to, 'w', encoding='utf-8', newline='') as f:
        f.write(data.decode('utf-8'))

    # Read the CSV into a list fof parent-child pairs
    parent_child_pairs = []
    with open(save_to, mode='r', encoding='utf-8', newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            parent_child_pairs.append((row['BIG'], row['LITTO']))
    
    # Build a dictionary to map parents to their children
    tree = defaultdict(list)
    all_children = set()
    for parent, child in parent_child_pairs:
        tree[parent].append(child)
        all_children.add(child)

    # Find the root (the parent not in any child list)
    root = None
    for parent, child in parent_child_pairs:
        if parent not in all_children:
            root = parent
            break
    
    # Function to recursively build the tree in the desired format
    def build_json_tree(name):
        children = tree.get(name, [])
        result = {"name": name}
        if children:
            result["children"] = [build_json_tree(child) for child in children]
        return result
    
    print(json.dumps(tree, indent=4))
    # Build and return the final tree starting from the root
    return build_json_tree(root)

