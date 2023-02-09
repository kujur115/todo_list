// require the mongoose lib
const mongoose= require('mongoose');

// create the schema for the database
const taskSchema =new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: false
    },
    date:{
        type: String,
        required:false
    },
    done:{
        type: Boolean,
        required: true
    }
});


// assigning the schema to task 
const Task = mongoose.model('Task',taskSchema);

// exprt the task
module.exports = Task;