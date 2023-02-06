// // console.log('its working fine');
// const tasks = [];
// const taskList = document.getElementById('list');
// const addTaskInput = document.getElementById('add');
// const tasksCounter = document.getElementById('tasks-counter');



// function addTaskToDOM(task){
//     const li=document.createElement('li');
//     li.innerHTML=`
//     <input type="checkbox" id="${task.id}" ${task.done ?"checked":""} 
//     class="custom-checkbox">
//     <label for="${task.id}">${task.text}</label>
//     <img src="bin.svg" class="delete" data-id="${task.id}" />
//     `;
//  taskList.append(li);
// }

// function renderList () {
//     taskList.innerHTML='';


//     for(let i=0;i<tasks.length;i++){
//         addTaskToDOM(tasks[i]);
//     }
//     tasksCounter.innerHTML=tasks.length;
// }

// function toggleTask (taskId) {
//     const task=tasks.filter(function(task){
//         return task.id==taskId;
//     });

//     if(task.length>0){
//         const currentTask=task[0];

//         currentTask.done= !currentTask.done;
//         renderList();
//         showNotification('Task toggled successfully');
//         return;
//     }
//     showNotification('Could not toggle the task');

// }

// function deleteTask (taskId) {
//     const newTasks=tasks.filter(function(task){
//         return task.id!==taskId;
//     });
//     tasks=newTasks;
//     renderList();
//     showNotification('Task deleted Successfully');
// }

// function addTask (task) {
//     if(task){
//         tasks.push(task);
//         renderList();
//         showNotification('Task added Succesfully');
//         return
//     }
//     showNotification('Task cannot be added');
// }

// function showNotification(text) {
//     alert(text);
// }

// function handleInputKeypress(e){
//     if(e.key=='Enter'){
//         const text =e.target.value;

//         if(!text){
//             showNotification('Task text cannot be empty');
//             return;
//         }

//         const task={
//             text:text,
//             id:Date.now().toString(),
//             done:false
//         }
//         e.target.value='';
//         addTask(task);
//     }
// }
// addTaskInput.addEventListener('keyup',handleInputKeypress);