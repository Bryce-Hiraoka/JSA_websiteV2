import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

function Test() {

    const [file, setFile] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0])
    }

    const treeSubmit = (event) => {
        setSelectedValue(event.target.value);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file_upload', file);

        try {
            const endpoint = "http://localhost:8000/upload/";
            const response = await fetch(endpoint, {
                method: "POST",
                body: formData
                });

            if (response.ok) {
                console.log("File upload success");
            } else {
                console.log("File upload fail");
            }
        } catch(err) {
            console.error(err);
        }
    }

        return (
            <div style={{padding: 200}}>
                <h1>Hello World</h1>

                <form onSubmit={handleSubmit}>
                    <input type='file' onChange={handleFileInputChange}/>

                    <button type='submit'>Upload</button>
                </form>

                <select onChange={treeSubmit} value={selectedValue}>
                    <option value="1">Watanabe</option>
                    <option value="2">yamaguchiamaguchi</option>
                    <option value="3">Ono</option>
                </select>

                {selectedValue && (
                <Link to={`/tree/${selectedValue}`}>
                <button>Go to Page {selectedValue}</button>
                </Link>
      )}

            </div>
        )
    }

export default Test;