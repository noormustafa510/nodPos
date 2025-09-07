const router = require('express').Router();
const InventoryController = require('../controllers/inventory.controller')

router.post('/inventory', InventoryController.createInventory);
router.get('/inventory', InventoryController.getInventory);
router.get('/inventory/:id', InventoryController.getInventoryByDate);
router.put('/inventory/:id', InventoryController.updateInventory);
router.delete('/inventory/:id', InventoryController.deleteInventory);





module.exports = router;
