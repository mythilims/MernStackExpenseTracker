const ExpenseTracker = require("../Models/ExpenseTracker.model")

const expenseTrackerByCategory = async(req,res) =>{

   const expenseTracker =await ExpenseTracker.aggregate([
    {
        $group:{
            _id:"$category",
           totalAmount: { "$sum": "$amount" }
        }
    },{
        $project:{
            _id:0,
            category:"$_id",
            totalAmount:1
        }
    }
   ])
      console.log(expenseTracker);

   res.json(expenseTracker);
   
}


module.exports =expenseTrackerByCategory