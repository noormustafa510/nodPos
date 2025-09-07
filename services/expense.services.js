const ExpenseModel = require("../models/expense.model");

class ExpenseServices{
    static async createExpense(name, value,eDate){

        const createExpense =  new ExpenseModel({name,value,eDate});

        const expense = await createExpense.save();

        return expense;

    }
     static async getExpenses(){

        const expenseList =  await ExpenseModel.find().sort({_id:-1}).limit(50);
        return expenseList;

    }

     static async getExpensesWDate(eDate){

        const expenseList =  await ExpenseModel.find({eDate});
        return expenseList;

    }

 static async updateExpense(id,name, value,eDate){


    const updatedExpense = await ExpenseModel.findByIdAndUpdate(id,{name,value,eDate})

    return updatedExpense;

    }

    static async deleteExpense(id){
        const deletedExpense = await ExpenseModel.findByIdAndDelete(id);
        return deletedExpense;
    }

}

module.exports = ExpenseServices;