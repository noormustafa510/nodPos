const ProductServices = require("../services/product.services");
const ProductModel = require("../models/product.model");

exports.createProduct = async (req, res, next) => {
  try {
    const {
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
    } = req.body;

    let checkProduct = await ProductModel.findOne({ qrCode });

    if (checkProduct) {
      res.status(200).json({ msg: "Duplicate" });
    } else {
      let product = await ProductServices.createProduct(
        name,
        category,
        qrCode,
        price,
        cost,
        discount,
        inventory,
        bItems,
        wNumber,
        pExpiry,  mUnit,
      sLocation,
      );

      res.status(200).json({ msg: "completed" });
    }
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const productList = await ProductServices.getProducts();

    res.status(200).json(productList);
  } catch (err) {
    console.log(err);

    res.status(404).json(err);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const qrCode = req.params.id;

    const product = await ProductServices.getProduct(qrCode);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ msg: "nf" });
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

      const {
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
    } = req.body;

    const product = await ProductServices.updateProduct(id,  name,
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
      sLocation,);


    if (product) {
      res.status(200).json(product);
    } else {

      res.status(404).json({ msg: "nf" });
    }
  } catch (err) {
                            console.log(err);

    res.status(404).json(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await ProductServices.deleteProduct(id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ msg: "nf" });
    }
  } catch (err) {
    res.status(404).json(err);
  }
};