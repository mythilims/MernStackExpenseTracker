const express =require('express');
const expenseTrackerByCategory = require('../../Controller/ExpenseTrackerCategorySummaryController');
const route  =express.Router();

route.get('/byCategory',expenseTrackerByCategory);

module.exports =route;