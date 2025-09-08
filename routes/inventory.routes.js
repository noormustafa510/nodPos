const router = require('express').Router();
const InventoryController = require('../controllers/inventory.controller')
const UserController = require('../controllers/user.controller')




  const   authenticateToken = async  (req,res, next) => {    
    UserController.authenticateUserViaToken(req,res,next,'inventory')
    
}

router.post('/inventory', authenticateToken, InventoryController.createInventory);
router.get('/inventory', authenticateToken, InventoryController.getInventory);
router.get('/inventory/:id', authenticateToken, InventoryController.getInventoryByDate);
router.put('/inventory/:id', authenticateToken, InventoryController.updateInventory);
router.delete('/inventory/:id', authenticateToken, InventoryController.deleteInventory);





module.exports = router;
