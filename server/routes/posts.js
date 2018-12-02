const express = require('express')
const router = express.Router();


const axios = require('axios');

//const PostAPI ='https://jsonplaceholder.typicode.com/posts'
// const PostAPI='http://localhost:3000/Tools'
// router.get('/',(req,res)=>{
//     axios.get('http://localhost:3000/Tools').then(posts=>{
//         console.log(posts.data);
//      res.status(200);
//      res.json(posts.data);
//     })
//     .catch(error=>{ 
//         res.status(500).send(error);
//     })
// }); 
var msg = 'This is a message';
router.get('/A',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send('This is a message');
    res.status(200);}
);

module.exports= router;
