const router = require("express").Router();
  const multer = require('multer');
    const path = require('path');
const ProductController = require("../controllers/product.controller");
const UserController = require("../controllers/user.controller");

const authenticateToken = async (req, res, next) => {
  UserController.authenticateUserViaToken(req, res, next, "product");
};

   // Configure Multer for file storage
    const storage = multer.diskStorage({
      
      destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to store uploaded images
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
      },
    });

    const upload = multer({ storage: storage });

    //upload.single('image'),

//router.post("/product/upload" ,upload.single('image'), ProductController.uploadImage);
router.post("/product", authenticateToken, ProductController.createProduct);
router.get("/product", authenticateToken, ProductController.getProducts);
router.get("/product/:id", authenticateToken, ProductController.getProduct);
router.put("/product/:id", authenticateToken, ProductController.updateProduct);
router.put("/product/", authenticateToken, ProductController.updateProductItems);

router.delete(
  "/product/:id",
  authenticateToken,
  ProductController.deleteProduct
);

module.exports = router;
