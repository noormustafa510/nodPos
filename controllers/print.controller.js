const PrintServices = require("../services/print.services");

exports.printBill = async (req, res, next) => {
var result = await PrintServices.printBill();
if(result){
    res.status(200).json({msg: "Success"})
}
}