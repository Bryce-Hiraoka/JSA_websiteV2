import React, { Component, useState } from 'react';

function Test() {

    const [file, setFile] = useState(null);

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0])
    }

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
            </div>
        )
    }

export default Test;