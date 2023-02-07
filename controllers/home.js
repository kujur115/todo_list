const task=require('../models/task');


module.exports.home=function(req,res){
    // return res.end('<h1>Express is up for Coderial</h1>');
    // console.log(task)

    task.find({},(err, taskList)=>{
        if(err){
            console.log('Error while fetching the data from db');
            return;
        }

        return res.render('home',{
        title:"My TODO",
        Task: taskList
    });
    })


    // return res.render('home',{
    //     title:"Home",
    //     Task: task
    // });
}