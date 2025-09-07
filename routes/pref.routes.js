const router = require('express').Router();
const PrefController = require('../controllers/pref.controller')

router.get('/getINumber', PrefController.getInvoiceNumber);

module.exports = router;