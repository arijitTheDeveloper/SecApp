const express = require('express');
const path= require('path');
const app=express();
const cors = require('cors');

app.use(cors());
app.options('*', cors());


const posts = require('./server/routes/posts');

// app.use(express.static(path.join(__dirname,'dist')));
app.use('/posts',posts);
// app.get('*',(req,res) =>{
//     res.sendFile(path.join(__dirname,'dist/SecApp/index.html'))
// });


app.listen(3000,(req, res)=>{
    console.log('Running on port port');
})