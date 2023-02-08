const Task=require('../models/task');


module.exports.home=function(req,res){
    // return res.end('<h1>Express is up for Coderial</h1>');
    // console.log(task)

    Task.find({},(err, taskList)=>{
        if(err){
            console.log('Error while fetching the data from db');
            return;
        }

        return res.render('home',{
            title:"My TODO",
            Task: taskList
        });
    });


    // return res.render('home',{
    //     title:"Home",
    //     Task: task
    // });
}

module.exports.createTask=(req,res)=>{
    Task.create({
        task: req.body.task,
        category: req.body.category,
        date : req.body.date,
        done : false

    },(err)=>{
        if(err){
            console.log(`Error in creating a task: ${err}`);
            return;
        }
        // console.log('*******',newTask);
        return res.redirect('back');
    });
    // console.log(req.body);

};

module.exports.deleteTask=function(req, res){
    // console.log(req.query);
    let id = req.query.id

    Task.findOneAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('back');
    });
};

module.exports.deleteDoneTask=(req,res)=>{

    Task.deleteMany({done:true},(err)=>{
        if(err){
            console.log(`Error deleting done Task : ${err}`);
            return;
        }
        console.log(`delete done task completed`);
        return res.redirect('back');
    })

}

module.exports.toggleTask= (req,res)=>{
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


        Task.findOneAndUpdate(id,{$set:{done : {$eq:[false,"$present"]}}},(err)=>{
            
            if(err){
                console.log('error in updating the object',err);
                return;
            }
            console.log("update done");
            // task.done=(task.done)?false:true;
            return res.redirect('back');
        });

        // Task.findOneAndUpdate(id,{ $set:{done: ('$done')?false:true}},(err)=>{
        //     if(err){
        //         console.log('error in updating the object',err);
        //         return;
        //     }
        //     console.log("update done");
        //     // task.done=(task.done)?false:true;
        //     return res.redirect('back');
        // })


    };