const router = require('express').Router();
const SaleController = require('../controllers/sale.controller')
const UserController = require('../controllers/user.controller')




  const   authenticateToken = async  (req,res, next) => {    
    UserController.authenticateUserViaToken(req,res,next,'sale')
    
}

 const   uAuthenticateToken = async  (req,res, next) => {    
    UserController.authenticateUserViaToken(req,res,next,'user')
    
}

router.post('/sale', authenticateToken, SaleController.createSale);
router.get('/sale', authenticateToken, SaleController.getSale);
router.delete('/sale/:id', uAuthenticateToken, SaleController.deleteSale);


module.exports = router;

