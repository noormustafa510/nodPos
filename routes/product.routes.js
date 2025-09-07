const router = require('express').Router();
const ProductController = require('../controllers/product.controller')

router.post('/product', ProductController.createProduct);
router.get('/product', ProductController.getProducts);
router.get('/product/:id', ProductController.getProduct);
router.put('/product/:id', ProductController.updateProduct);
router.delete('/product/:id', ProductController.deleteProduct);



module.exports = router;
