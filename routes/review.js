const express = require('express');
const router = express.Router();

const { getReviews, getReview, addReview, deleteReview, updateReview } = require("../controllers/review");

router.get("/getReviews", getReviews);
router.get("/getReview/:reviewId", getReview);
router.post("/addReview", addReview);
router.post("/updateReview/:reviewId", updateReview);
router.delete("/deleteReview/:reviewId", deleteReview);


module.exports = router;