const ExpenseTracker = require("../Models/ExpenseTracker.model");

const createExpenseTracker = async (req, res) => {
  const expenseTracker = new ExpenseTracker( req.body );
  try {
    await expenseTracker.save();
    res.json(expenseTracker);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getAllExpenseTracker = async (req, res) => {
  try {
    const expense = await ExpenseTracker.find({}).select('name amount category date notes paymentMethod id');
    res.json(expense);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updateExpenseTracker = async (req, res) => {
  try {
    const expense = await ExpenseTracker.findByIdAndUpdate(
      req.params.id,
       req.body ,
      { new: true }
    );
    res.json(expense);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getByIdExpenseTracker = async (req, res) => {
  try {
    const expense = await ExpenseTracker.findById(req.params.id);
    res.json(expense);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteExpenseTracker = async (req, res) => {
  try {
    const expense = await ExpenseTracker.findByIdAndDelete(req.params.id);
    res.json(expense);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const expensebyCateogry = async (req, res) => {
  try {
    const expense = await ExpenseTracker.aggregate([{
      $group:{
        _id:'$category',
        totalAmount:{'$sum':'$amount'}
      }
    },{
      $project:{
        _id:0,
        category:'$_id',
        totalAmount:1
      }
    }]);
    res.json(expense);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
module.exports = {
  expensebyCateogry,
  createExpenseTracker,
  getAllExpenseTracker,
  updateExpenseTracker,
  getByIdExpenseTracker,
  deleteExpenseTracker,
};
