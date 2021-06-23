import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <h1>Welcome LMS</h1>
            <h2>You can Manage Study Metrial Here</h2>
            <ul>
                <Link to="/">
                    <li>Upload</li>
                </Link>
                <Link to="/delete">
                    <li>Delete</li>
                </Link>
                <Link to="/rate">
                    <li>Rate</li>
                </Link>
            </ul>
        </div>
    )
}