const router = require('express').Router();
const PrintController = require('../controllers/print.controller')


router.post('/print', PrintController.printBill);

module.exports = router;