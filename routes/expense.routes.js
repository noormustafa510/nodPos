const router = require('express').Router();
const ExpenseController = require('../controllers/expense.controller')

router.post('/expenses', ExpenseController.createExpense);
router.get('/expenses', ExpenseController.getTopExpense);
router.get('/expense/:id', ExpenseController.getExpenseWDate);
router.put('/expense/:id', ExpenseController.updateExpense);
router.delete('/expense/:id', ExpenseController.deleteExpense);



module.exports = router;
