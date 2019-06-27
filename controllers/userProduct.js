const mongoose = require('mongoose');

const UserProduct = mongoose.model("UserProduct");

module.exports.getUserProducts = async (req, res) => {
	try{
		const userProducts = await UserProduct.find({}).lean();


		res.status(200).send(userProducts);

	} catch (err) {
		console.log(err);
		res.status(500).send({ err });

	}
}


module.exports.getUserProduct = async (req, res) => {
	try {
		const { userProductId }  = req.params;
		const userProduct = UserProduct.find({ _id: { $in: userProductId }}).lean();

		res.status(200).send(userProduct);

	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}

module.exports.addUserProduct = async (req, res) => {
	try{ 
		const userProduct = new UserProduct(req.body);
	    await userProduct.save();
	    //await contentRefresh();
	    res.status(200).send(userProduct);

 
	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}

module.exports.deleteUserProduct = async (req, res) => {
	try{
		const userProductId = req.params;
	    const result = await UserProduct.findOneAndRemove({ _id : {$in: userProductId}}).lean();
	    res.status(200).send(result);	

	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}