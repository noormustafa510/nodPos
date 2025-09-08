const router = require('express').Router();
const UserController = require('../controllers/user.controller')




  const   authenticateToken = async  (req,res, next) => {    
    UserController.authenticateUserViaToken(req,res,next,'user')
    
}

router.post('/user', authenticateToken, UserController.createUser);
router.get('/user', authenticateToken, UserController.signIn);


module.exports = router;