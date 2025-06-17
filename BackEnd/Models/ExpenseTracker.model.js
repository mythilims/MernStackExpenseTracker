const mongoose =require('mongoose');
const expenseImageSchema =new mongoose.Schema({
    image:String,
    expenseId:{type:mongoose.Schema.Types.ObjectId,ref:'ExpenseTracker'}
})
const expenseTrackerSchema = new mongoose.Schema({
    name:{type: String, required:true},
    amount:{type: Number, required:true},
    category:{type:String, required:true},
    date:{type:Date,required:true},
    paymentMethod:{type:String,required:true,enum:['cash','upi']},
    notes:{type:String,required:true},
    userId:{type: mongoose.Schema.Types.ObjectId,ref:'User'},
    image:expenseImageSchema,

},{timestamps:true});

const expenseTracker = mongoose.model('ExpenseTracker',expenseTrackerSchema);

module.exports =expenseTracker;


