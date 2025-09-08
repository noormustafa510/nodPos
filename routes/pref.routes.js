const router = require('express').Router();
const PrefController = require('../controllers/pref.controller')
const UserController = require('../controllers/user.controller')




  const   authenticateToken = async  (req,res, next) => {    
    UserController.authenticateUserViaToken(req,res,next,'pref')
    
}

router.get('/getINumber', authenticateToken, PrefController.getInvoiceNumber);

module.exports = router;