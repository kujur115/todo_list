const express =require('express');
const port=8000;


const db=require('./config/mongoose');
const Task =require('./models/task');

const app=express();


// use express routers..
app.use(express.urlencoded());
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));


app.listen(port,(err)=>{
    if(err){
        console.log(`Error occured while running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});