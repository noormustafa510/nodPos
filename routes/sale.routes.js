const router = require('express').Router();
const SaleController = require('../controllers/sale.controller')

router.post('/sale', SaleController.createSale);
router.get('/sale', SaleController.getSale);
router.delete('/sale/:id', SaleController.deleteSale);


module.exports = router;

