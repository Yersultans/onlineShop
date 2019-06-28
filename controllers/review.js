const mongoose = require('mongoose');

const Review = mongoose.model("Review");


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
		const review = await Review.find({ _id: {$in :  reviewId }}).lean();
		// if(err) {
		// 	console.log(err);
		// 	res.status(500).send({ err });
		// }

		res.status(200).send(review);


	} catch (err) {
		console.log(err);
		res.status(500),send({ err });
	}
}

module.exports.addReview = async (req, res) => {
	try {
	const review = new Review(req.body);
	// review.userId = req.body.userId;
	// review.productId = req.body.productId;
	// review.text = req.body.text;
	// review.point = req.body.point;
	await review.save();
	res.status(200).send(review);
	//await contentRefresh();
	
	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}

module.exports.deleteReview = async (req, res) => {
	try {
		const reviewId = req.params.reviewId;
		const review  = await Review.findByIdAndDelete( reviewId ).lean();
		res.status(200).send(review);

	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}

module.exports.updateReview = async (req, res) => {
	try{
		const reviewId = req.params.reviewId;
		const  review  = await Review.findById( reviewId, function(err, review){
			review.userId = req.body.userId;
			review.productId = req.body.productId;
			review.text = req.body.text;
			review.point = req.body.point;
		    review.save();
			res.status(200).send(review);
		});

		



	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}