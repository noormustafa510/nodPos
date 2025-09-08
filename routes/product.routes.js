const router = require('express').Router();
const ProductController = require('../controllers/product.controller')
const UserController = require('../controllers/user.controller')




  const   authenticateToken = async  (req,res, next) => {    
    UserController.authenticateUserViaToken(req,res,next,'product')
    
}

router.post('/product', authenticateToken, ProductController.createProduct);
router.get('/product', authenticateToken, ProductController.getProducts);
router.get('/product/:id', authenticateToken, ProductController.getProduct);
router.put('/product/:id', authenticateToken, ProductController.updateProduct);
router.delete('/product/:id', authenticateToken, ProductController.deleteProduct);



  


module.exports = router;


