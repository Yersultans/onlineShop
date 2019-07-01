const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const UserProduct = mongoose.model("UserProduct");

const { getUserProducts, getUserProduct, addUserProduct, deleteUserProduct, updateUserProduct, getPopulatedUserProduct } = require('../controllers/userProduct');

router.get('/getUserProducts', getUserProducts);
router.get('/getUserProduct/:userProductId', getUserProduct);
router.get('/getPopulatedUserProduct', getPopulatedUserProduct);
router.delete('/deleteUserProduct/:userProductId', deleteUserProduct);
router.post('/addUserProduct', addUserProduct);
router.post('/updateUserProduct/:userProductId', updateUserProduct);


module.exports = router;
