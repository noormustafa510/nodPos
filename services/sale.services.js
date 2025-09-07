const SaleModel = require("../models/sale.model");
const PrefServices = require("./pref.service");

class SaleServices {
  static async createSale(
    items,
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
    customerName
  ) {
    const iNumber = await PrefServices.getInvoiceNumber();
    const sale = new SaleModel({
      items,
      tItems,
      tBox,
      oDiscount,
      remarks,
      tax,
      tBill,
      iNumber,
      editedBillNumber,
      cName,
      shift,
      sDate,
      hour,
      min,
      payMethod,
      customerName,
    });

    const rSale = await sale.save();
    return rSale;
  }
  static async getSale(
    remarks,
    iNumber,
    cName,
    shift,
    sDate,
    hour,
    min,
    payMethod,
    customerName
  ) {
    let entry = {};
    remarks ? (entry.remarks = remarks) : 0;

    iNumber ? (entry.iNumber = iNumber) : 0;
    cName ? (entry.cName = cName) : 0;
    shift ? (entry.shift = shift) : 0;
    sDate ? (entry.sDate = sDate) : 0;
    hour ? (entry.hour = hour) : 0;
    min ? (entry.min = min) : 0;
    payMethod ? (entry.payMethod = payMethod) : 0;
    customerName ? (entry.customerName = customerName) : 0;

    console.log(entry);

    const sale = await SaleModel.find(entry);

    return sale;
  }
  static async deleteAll(sDate){
   const deletion = await SaleModel.deleteMany({sDate})
    return deletion;
  }
}



module.exports = SaleServices;
