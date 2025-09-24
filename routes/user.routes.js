const router = require('express').Router();
const UserController = require('../controllers/user.controller')




  const   authenticateToken = async  (req,res, next) => {    
    UserController.authenticateUserViaToken(req,res,next,'user')
    
}
router.get('/user/', authenticateToken, UserController.getUsers);

router.post('/user', authenticateToken, UserController.createUser);
router.put('/user/:id', authenticateToken, UserController.updateUser);
router.delete('/user/:id', authenticateToken, UserController.deleteUser);

router.post('/userSign', UserController.signIn);


module.exports = router;