const PrefServices = require("../services/pref.service");

exports.getInvoiceNumber = async (req, res, next) => {
try{
   const number = await PrefServices.getInvoiceNumber();
    res.status(200).json({number: number});
}
catch(err){
    console.log(err)
    res.status(404).json({msg: err})
}
}