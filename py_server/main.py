from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from collections import defaultdict
from pymongo import MongoClient
from dotenv import load_dotenv
import csv
import json
import io
import os

app = FastAPI()
load_dotenv()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

def build_tree(file):
    # Read the CSV into a list fof parent-child pairs
    parent_child_pairs = []
    #with open(csv_file, mode='r') as file:
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
    
    # Build and return the final tree starting from the root
    return build_json_tree(root)

def get_next_id(collection):
    last_doc = collection.find_one(sort=[("_id", -1)])  # Find the highest _id
    return (last_doc["_id"] + 1) if last_doc else 1  # Start from 1 if empty

def insert_db(tree):
    database_url = os.getenv("MONGO_URI")
    client = MongoClient(database_url)
    db = client[os.getenv("db_name")]
    collection = db[os.getenv("col_name")]

    # Insert the data into the collection
    tree["_id"] = get_next_id(collection)

    # Insert the data
    collection.insert_one(tree)

    client.close()
    print(f"Inserted document with ID: {tree['_id']}")

    # Close the connection
    client.close()

    print("JSON data saved to MongoDB successfully.")

@app.post('/upload/')
async def create_upload_file(file_upload: UploadFile):
    data = await file_upload.read()
    csv_string = data.decode('utf-8')
    file = io.StringIO(csv_string)
    tree = build_tree(file)  
    insert_db(tree)
 