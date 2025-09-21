const ProductModel = require("../models/product.model");

class ProductServices {
  static async createProduct(
    name,
    category,
    qrCode,
    price,
    cost,
    discount,
    inventory,
    bItems,
    wNumber,
    pExpiry,
    mUnit,
    sLocation
  ) {
    const createProduct = new ProductModel({
      name,
      category,
      qrCode,
      price,
      cost,
      discount,
      inventory,
      bItems,
      wNumber,
      pExpiry,
      mUnit,
      sLocation,
    });
    const product = await createProduct.save();
    return product;
  }

  static async getProducts() {
    const productList = await ProductModel.find({});

    return productList;
  }

  static async getProduct(qrCode) {
    const product = await ProductModel.findOne({ qrCode });

    return product;
  }

  static async updateProduct(
    id,
    name,
    category,
    qrCode,
    price,
    cost,
    discount,
    inventory,
    bItems,
    wNumber,
    pExpiry,
    mUnit,
    sLocation
  ) {
    const product = new ProductModel({
      name,
      category,
      qrCode,
      price,
      cost,
      discount,
      inventory,
      bItems,
      wNumber,
      pExpiry,
      mUnit,
      sLocation,
    });

    const updateProduct = await ProductModel.findByIdAndUpdate(id, {
      name,
      category,
      price,
      cost,
      discount,
      inventory,
      bItems,
      wNumber,
      pExpiry,
      mUnit,
      sLocation,
    });

    return updateProduct;
  }

  static async deleteProduct(id) {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    return deletedProduct;
  }

  //  static async updateProduct( name, category, qrCode,price,cost,discount,inventory,bItems,wNumber,pExpiry) {
  //         const createProduct = new  ProductModel({ name, category, qrCode,price,cost,discount,inventory,bItems,wNumber,pExpiry });
  //         const product = await createProduct.save();
  //         return product;
  // }

  // static async getTodoData(userId){
  //     const todoData = await  TodoModel.find({userId});

  //     return todoData;
  // }

  // static async deleteTodo(userId){
  //     const deleteItem = await  TodoModel.findOneAndDelete({_id: id});

  //     return deleteItem;
  // }
}
module.exports = ProductServices;
