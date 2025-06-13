const ExpenseTracker = require("../Models/ExpenseTracker.model");

const createExpenseTracker = async (req, res) => {
  const expenseTracker = new ExpenseTracker({ name: req.body.name });
  try {
    await expenseTracker.save();
    res.json(expenseTracker);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getAllExpenseTracker = async (req, res) => {
  try {
    const state = await ExpenseTracker.find({});
    res.json(state);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updateExpenseTracker = async (req, res) => {
  try {
    const state = await ExpenseTracker.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.json(state);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getByIdExpenseTracker = async (req, res) => {
  try {
    const state = await ExpenseTracker.findById(req.params.id);
    res.json(state);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteExpenseTracker = async (req, res) => {
  try {
    const state = await ExpenseTracker.findByIdAndDelete(req.params.id);
    res.json(state);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
module.exports = {
  createExpenseTracker,
  getAllExpenseTracker,
  updateExpenseTracker,
  getByIdExpenseTracker,
  deleteExpenseTracker,
};
