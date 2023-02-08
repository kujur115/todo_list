const express = require('express');
const Task=require('../models/task');

const router=express.Router();
const homeController=require('../controllers/home');

// console.log('router loaded');

router.get('/',homeController.home);

router.post('/create-task',homeController.createTask);

router.get('/toggle/',homeController.toggleTask);

router.get('/delete-task/', homeController.deleteTask);

router.get('/delete-done-task', homeController.deleteDoneTask);


module.exports=router;