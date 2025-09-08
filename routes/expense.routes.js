const router = require('express').Router();
const ExpenseController = require('../controllers/expense.controller')

const UserController = require('../controllers/user.controller')




  const   authenticateToken = async  (req,res, next) => {    
    UserController.authenticateUserViaToken(req,res,next,'expenses')
    
}

router.post('/expenses',authenticateToken, ExpenseController.createExpense);
router.get('/expenses',authenticateToken, ExpenseController.getTopExpense);
router.get('/expense/:id', authenticateToken, ExpenseController.getExpenseWDate);
router.put('/expense/:id', authenticateToken, ExpenseController.updateExpense);
router.delete('/expense/:id', authenticateToken, ExpenseController.deleteExpense);



module.exports = router;
