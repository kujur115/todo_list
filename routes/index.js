// require the express library
const express = require('express');

// require the task 
const Task=require('../models/task');

// setup the router
const router=express.Router();

// require the controller
const homeController=require('../controllers/home');

// console.log('router loaded');

// different routers and assigning their controllers

// home router
router.get('/',homeController.home);

// create task post router
router.post('/create-task',homeController.createTask);

// toggle the task done router
router.get('/toggle/',homeController.toggleTask);

// deleting the particular task router
router.get('/delete-task/', homeController.deleteTask);

// delete tall done task router
router.get('/delete-done-task', homeController.deleteDoneTask);


module.exports=router;