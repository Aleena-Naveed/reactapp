import React from 'react';
import axios from 'axios';
import './Style.css'
import Header from './header';

export default function Upload() {
    const [fileName, setfileName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [file, setFile] = React.useState('')


    const fileUpload = (event) => {
        const upfile = event.target.files[0]
        setFile(upfile)
        setfileName(file.name)
        console.log(file)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('file', file)
        data.append('description', description);
        data.append('title', title);

        axios.post("http://localhost:3000/users/upload", data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
            .then(res => console.log(res))
    }
    return (
        <div>
            <div><Header /></div>
            {/* <div><p style="font-weight: bold; font-size: 20px; text-decoration: underline;">Upload Study Material</p></div> */}
            <p>Upload File Here: </p>
            <input type="file" onChange={fileUpload} />
            <p>Give Title:</p>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <p>Add Content Description:</p>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <br></br>
            <input type="submit" onClick={e => handleSubmit(e)} />
        </div>
    )
}