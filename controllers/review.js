const mongoose = require('mongoose');

const Review = mongoose.model("Review");
const User = mongoose.model("User");
const Product = mongoose.model("Product");

module.exports.getReviews = async (req, res) => {
	try {
		const reviews = await Review.find({});
		// if(err) { 
		// 	console.log(err);
		// 	res.status(500).send({ err });
		// }
		res.status(200).send(reviews);
	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	} 
}

module.exports.getReview = async (req, res) => {
	try { 
		const { reviewId } = req.params;
		const [ err, user ] = await Review.findById({ _id: {$in :  reviewId }}).lean();
		if(err) {
			console.log(err);
			res.status(500).send({ err });
		}

		res.status(200).send(review);


	} catch (err) {
		console.log(err);
		res.status(500),send({ err });
	}
}

module.exports.addReview = async (req, res) => {
	try {
	// const review = new Review(req.body);
	const user = await User.find({});
	const product = await User.find({});
	const review = new Review();
	review.userId = user;
	review.productId = product;
	review.text = "norm";
	review.point = 7;
	res.status(200).send(review);


	//await review.save();
	//await contentRefresh();
	
	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}

module.exports.deleteReview = async (req, res) => {
	try {
		const reviewId = req.params;
		const [ err, review ] = await Review.findOneAndRemove({ userId }).lean();
		if(err){
			console.log(err);
			res.status(500).send({ err });
		}

		res.status(200).send(review);

	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}

module.exports.updateReview = async (req, res) => {
	try{
		const reviewId = req.params;
		await Review.update({ _id: reviewId }, req.body);
		const [ err, review ] = await Review.findById({ userId }).lean();
		if(err){
			console.log(err);
			res.status(500).send({ err });
		}

		res.status(200).send(review);



	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}