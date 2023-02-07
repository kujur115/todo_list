const express = require('express');
const Task=require('../models/task');

const router=express.Router();
const homeController=require('../controllers/home');

// console.log('router loaded');

router.get('/',homeController.home);

router.post('/create-task',(req,res)=>{
    Task.create({
        task: req.body.task,
        category: req.body.category,
        date : req.body.date

    },(err,newTask)=>{
        if(err){
            console.log(`Error in creating a task: ${err}`);
            return;
        }
        console.log('*******',newTask);
        return res.redirect('back');
    });
    // console.log(req.body);

});



module.exports=router;