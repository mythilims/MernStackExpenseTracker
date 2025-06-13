const express =require('express');

const { createExpenseTracker, getAllExpenseTracker, updateExpenseTracker, getByIdExpenseTracker, deleteExpenseTracker } = require('../../Controller/ExpenseTracker.controller');
const authMiddleWare = require('../../Middleware/AuthMiddleware');
const route =express.Router();

route.use(authMiddleWare);

//create a state
route.post('/create',createExpenseTracker)

// get data
route.get('/all',getAllExpenseTracker)

//update data 

route.put('/update/:id',updateExpenseTracker)

//get by id 

route.get('/:id',getByIdExpenseTracker)

//delete data

route.delete('/delete/:id',deleteExpenseTracker)

module.exports =route;