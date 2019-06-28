const express = require('express');
const router = express.Router();

const { getProducts, getProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/product");

router.get("/getProducts", getProducts);
router.get("/getProduct/:productId", getProduct);
router.post("/addProduct", addProduct);
router.post("/updateProduct/:productId", updateProduct);
router.delete("/deleteProduct/:productId", deleteProduct);

module.exports = router;