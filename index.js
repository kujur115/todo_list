// require the express and setup port
const express =require('express');
const port=8000;

// reuire mongoose and database
const db=require('./config/mongoose');
const Task =require('./models/task');

// start the express server
const app=express();



// use midware to decode the url
app.use(express.urlencoded());

// use express routers..
app.use('/',require('./routes'));

// view engine for frontend
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));

// check for server running status
app.listen(port,(err)=>{
    if(err){
        console.log(`Error occured while running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});