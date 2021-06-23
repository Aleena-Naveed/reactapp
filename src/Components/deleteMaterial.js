import axios from 'axios';
import React, { useState } from 'react';
import './Style.css'
import Header from './header';


export default function Delete() {
    const [materials, setMaterial] = useState(null);
    
    React.useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        axios.get("http://localhost:3000/users/getList", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })
            .then(res => {
                if (res.data.success) {
                    setMaterial(res.data.rec);
                }
                else {
                    setMaterial([{
                        title: 'No Record Found',
                        description: 'N/A',
                        filename: 'N/A',
                        rating: 'N/A',
                        _id: null
                    }])
                }
            })
    }

    const handleDelete = (id) => {
        if (!id) {
            alert('Cannot Delete')
        }
        else {
            axios.delete("http://localhost:3000/users/delete/" + String(id))
                .then(res => {
                    if (res.data.success) {
                        getList()
                    }
                })

        }
    }
    return (
        <div>
            <div><Header /></div>
            <h2>Delete Material!</h2>
            <table>
                <tr>
                    <td>No.</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>File name</td>
                    <td>Rating</td>
                    <td>Action</td>
                </tr>
                {
                    materials ?
                        materials.map((material, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{material.title}</td>
                                    <td>{material.description}</td>
                                    <td>{material.filename}</td>
                                    <td>{material.rating}</td>
                                    <td><button onClick={() => handleDelete(material._id)}>Delete</button></td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                }
            </table>
        </div>
    )
        
}