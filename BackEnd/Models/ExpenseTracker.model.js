const mongoose =require('mongoose');

const expenseTrackerSchema = new mongoose.Schema({
    name:{type: String, required:true},
    amount:{type: Number, required:true},
    category:{type:String, required:true},
    date:{type:Date,required:true},
    paymentMethod:{type:String,required:true},
    notes:{type:String,reuired:true},
    userId:{type: mongoose.Schema.Types.ObjectId,ref:'User'}

});

const expenseTracker = mongoose.model('ExpenseTracker',expenseTrackerSchema);

module.exports =expenseTracker;


