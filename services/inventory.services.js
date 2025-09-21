const InventoryModel = require("../models/inventory.model");

class InventoryServices{
    static async createInventory(items, supName ,iDate,onDiscount,tax,bill){
    

        const inventory = new InventoryModel({items,supName,iDate,onDiscount,tax,bill});
        const rInventory = await inventory.save(); 

        return rInventory;
    }

      static async getInventoryByDate(iDate){




        const inventoryList = await InventoryModel.find({iDate});
        console.log(iDate);

        //.sort({_id:-1}).limit(200)
        return inventoryList;
    }

     static async getInventory(){
    

        const inventoryList =await  InventoryModel.find().sort({_id:-1}).limit(200);

        return inventoryList;
    }

       static async updateInventory(id,items,supName,iDate,onDiscount,tax,bill){

        const updatedInventory =  await InventoryModel.findByIdAndUpdate(id,{id,items,supName,iDate,onDiscount,tax,bill});
                                         

        return updatedInventory;
    }

    static async deleteInventory(id,items,supName,iDate,onDiscount,bill){
    

        const deletedInventory =  await InventoryModel.findByIdAndDelete(id);

        return deletedInventory;
    }
}

module.exports = InventoryServices; 