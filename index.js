const express =require('express');
const port=8000;
const app=express();


// use express routers..
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,(err)=>{
    if(err){
        console.log(`Error occured while running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});