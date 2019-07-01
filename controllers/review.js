const mongoose = require('mongoose');

const Review = mongoose.model("Review");


module.exports.getReviews = async (req, res) => {
  try {
	const reviews = await Review.find().lean();
	res.status(200).send(reviews);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  } 
}

module.exports.getReview = async (req, res) => {
  try { 
	const { reviewId } = req.params;
	const review = await Review.findById(reviewId).lean();
	res.status(200).send(review);
  } catch (err) {
	console.log(err);
	res.status(500),send({ err });
  }
}

module.exports.addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
	res.status(200).send(review);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.deleteReview = async (req, res) => {
  try {
	const { reviewId } = req.params;
	const review  = await Review.findByIdAndDelete( reviewId );
	res.status(200).send(review);

  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.updateReview = async (req, res) => {
  try{
	const { reviewId } = req.params;
	const review = await Review.findOneAndDelete({_id: reviewId}, req.body);
	res.status(200).send(review);
 } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}