const ExpenseServices = require("../services/expense.services");
const ExpenseModel = require("../models/expense.model");

exports.createExpense = async (req, res, next) => {
  try {

    const { name, value, eDate } = req.body;

    const expense = await ExpenseServices.createExpense(name, value, eDate);
    res.status(200).json(expense);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};



//Get 10 Expenses
exports.getTopExpense = async (req, res, next) => {
  try {
    const expenseList = await ExpenseServices.getExpenses();
    res.status(200).json(expenseList);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};



//Get Expenses with Date
exports.getExpenseWDate = async (req, res, next) => {
  try {
    const  eDate  = req.params.id;
    const expenseList = await ExpenseServices.getExpensesWDate(eDate);
    res.status(200).json(expenseList);
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};


//Update Expense
exports.updateExpense = async (req, res, next) => {
  try {
    const { name, value, eDate } = req.body;
    const id = req.params.id;
    const updateExpense = await ExpenseServices.updateExpense(id,name, value, eDate);
    res.status(200).json(updateExpense);
  } catch (err) {
    console.log(err)
    res.status(404).json({ msg: err });
  }
};


//DeleteExpense
exports.deleteExpense = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const deletedExpense = await ExpenseServices.deleteExpense(id);
        res.status(200).json(deletedExpense);
    }
    catch(err){
            res.status(404).json({ msg: err });

    }
}
