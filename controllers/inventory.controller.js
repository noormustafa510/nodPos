const InventoryServices = require("../services/inventory.services");

exports.createInventory = async (req, res, next) => {

    try{
     
       const {items, supName ,iDate,onDiscount,tax,bill} = req.body;

      const inventory =  await InventoryServices.createInventory(items, supName ,iDate, onDiscount,tax,bill);
        res.status(200).json(inventory);

    }
    catch(err){
            console.log(err);
        res.status(404).json(inventory);

    }
}


exports.getInventory = async (req,res,next) =>{
    try{
        const inventoryList = await InventoryServices.getInventory();
        res.status(200).json(inventoryList);
    } catch(err){
        res.status(404).json({msg: err})
    }
}

exports.getInventoryByDate = async (req,res,next) =>{
    try{

        const iDate = req.params.id;
        console.log(`Data:${iDate}`);

        const inventoryList = await InventoryServices.getInventoryByDate(iDate);
        res.status(200).json(inventoryList);
    } catch(err){
        console.log(err);
        res.status(404).json({msg: err})
    }
}

exports.updateInventory = async(req,res, next)=>{   

    try{
        const id = req.params.id;
               const {items, supName ,iDate,onDiscount,tax,bill} = req.body;

                const updatedInventory = await InventoryServices.updateInventory(id,items, supName ,iDate,onDiscount,tax,bill);

                    res.status(200).json(updatedInventory);
            }
    catch(err){

                res.status(404).json({msg: err})

    }
}

exports.deleteInventory = async(req,res, next)=>{
    try{
               const id = req.params.id;
                const deletedInventory = await InventoryServices.deleteInventory(id);
                    res.status(200).json(deletedInventory);
            }
    catch(err){
                res.status(404).json({msg: err})

    }
}