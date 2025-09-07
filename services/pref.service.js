const PrefModel = require("../models/pref.model");

class ProductServices {
  static async getInvoiceNumber(){
       const data = await PrefModel.findOne();
       if(data){
        let {iNumber, id} = data;
        iNumber = iNumber +1;

        await PrefModel.findByIdAndUpdate(id, {iNumber});
        return iNumber;

       }else {
        const iNumber = 0;
        const phoneNumber = "0321";
        const mAddress = "Kasur";
        const model = new PrefModel({ iNumber, phoneNumber, mAddress})

        const data = await model.save();


        return iNumber;  

       }
  }
}

module.exports = ProductServices