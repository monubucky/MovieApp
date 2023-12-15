console.log("om gan ganpataye namh....");
const express = require('express');
const app = express();
const config = require('./config');
app.get('/',(req,res)=>{
    res.render('./config');
});
app.listen(5000, () => {
    console.log("Success " + config.config.name);
})