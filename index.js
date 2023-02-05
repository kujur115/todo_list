const express =require('express');
const port=8000;
const app=express();






app.listen(port,(err)=>{
    if(err){
        console.log(`Error occured while running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});