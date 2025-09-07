const SaleServices = require("../services/sale.services");


exports.createSale = async (req, res, next) => {
    try {
        const {   items,
    tItems,
    tBox,
    oDiscount,
    remarks,
    tax,
    tBill,
    editedBillNumber,
    cName,
    shift,
    sDate,
    hour,
    min,
    payMethod,
    customerName} = req.body;

    const sale = await SaleServices.createSale( items,
    tItems,
    tBox,
    oDiscount,
    remarks,
    tax,
    tBill,
    editedBillNumber,
    cName,
    shift,
    sDate,
    hour,
    min,
    payMethod,
    customerName);


    res.status(200).json(sale);

    } 
    catch(err){
    res.status(404).json({msg:err});

    }
}

exports.getSale = async (req, res, next) => {
    try {
       const remarks = req.query.remarks;
              const iNumber = req.query.iNumber;
       const cName = req.query.cName;
       const shift = req.query.shift;
       const sDate = req.query.sDate;
       const hour = req.query.hour;
       const min = req.query.min;
       const payMethod = req.query.payMethod;
       const customerName = req.query.customerName;  

    
       const sale = await SaleServices.getSale(remarks,iNumber,cName,shift,sDate,hour,min,payMethod,customerName);
        res.status(200).json(sale)
    
    } catch(err){
        res.status(404).json({msg:err})

    }}


    exports.deleteSale = async (req,res,next) =>{
        try{
         const sDate = req.params.id;
            
            const deletion = await SaleServices.deleteAll(sDate);
            res.status(200).json(deletion);
        }catch(err){
            console.log(err)
                    res.status(404).json({msg:err})

        }
    }