// import axios from 'axios';
// import React, { useState } from 'react';
// import './Style.css'
// import Header from './header';

// export default function Rate() {
//     const [rate, setrate] = useState(null);
//     const [material, setMaterial] = React.useState(null);

//     const getList = () => {
//         axios.get("http://localhost:3000/users/getList", {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             }
//         })
//             .then(res => {
//                 if (res.data.success) {
//                     setMaterial(res.data.rec)
//                 }
//                 else {
//                     setMaterial([{
//                         title: 'No Record Found',
//                         description: 'N/A',
//                         filename: 'N/A',
//                         rating: 'N/A',
//                         _id: null
//                     }])
//                 }
//             })
//     }

//     const update = (id, rating) => {
//         const data = { id: String(id), rating: String(rating) }
//         axios.patch("http://localhost:3000/users/rate", data, {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             }
//         })
//             .then(res => {
//                 if (res.data.success) {
//                     this.getList()
//                 }
//             })
//     }
// }