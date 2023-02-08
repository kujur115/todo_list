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

let checkTrue=(id)=>{
    var promise =new Promise((resolve,reject)=>{
        Task.findById(id,(err,task)=>{
            if(err){
                // console.log(err);
                reject(err);
            }
            resolve( (task.done)?false:true);

        });
    });
    return promise;
}

module.exports.toggleTask= (req,res)=>{
    let id = req.query.id;
    //   let t= Task.findById(id,(err,task)=>{
    //         if(err){
    //             console.log(err);
    //             return;
    //         }
    //         return (task.done)?false:true;

    //     });

    checkTrue(id).then((t)=>{
        Task.findOneAndUpdate(id,{$set:{ done : t}},(err)=>{
            
            if(err){
                console.log('error in updating the object',err);
                return;
            }
            console.log("update done");
            return res.redirect('back');
        });
    }).catch((err)=>{
        console.log(`Errrrror :${err}`);
    });
        // Task.findOneAndUpdate(id,{$set:{ done : t}},(err)=>{
            
        //     if(err){
        //         console.log('error in updating the object',err);
        //         return;
        //     }
        //     console.log("update done");
        //     return res.redirect('back');
        // });

    };