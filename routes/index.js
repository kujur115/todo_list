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
        date : req.body.date,
        done : false

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

router.get('/toggle/',(req,res)=>{
    let id = req.query.id;
    // let t;
    // console.log('fdjfdjfd');
    // Task.findById(id,(err,task)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     t=task.done;
    //     // console.log(task);
    //     t=(t)?false:true;
    //     console.log(t,"8888888888888888");
    // }).then(()=>{


        Task.findOneAndUpdate(id,{$set:{done : {$not:"$done"}}},(err)=>{
            
            if(err){
                console.log('error in updating the object',err);
                return;
            }
            console.log("update done");
            // task.done=(task.done)?false:true;
            return res.redirect('back');
        });


    // })
    
    
    
    // Contact.findOneAn(id, function(err){
    //     if(err){
    //         console.log('error in deleting the object');
    //         return;
    //     }
    //     return res.redirect('back');
    // });
});
router.get('/delete-task/', function(req, res){
    // console.log(req.query);
    let id = req.query.id

    Task.findOneAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    });
});



module.exports=router;