const express = require('express');
const router = express.Router();


const mongoose = require('mongoose');
const User = mongoose.model("User");

const {  getUsers, getUser, addUser, deleteUser, updateUser } = require('../controllers/user');

router.get('/getUsers', getUsers);
router.get('/getUser/:userId', getUser);
router.post('/addUser', addUser);
router.post('/updateUser/:userId', updateUser);
router.delete('/deleteUser/:userId', deleteUser);

module.exports = router;