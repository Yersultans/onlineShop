const mongoose = require('mongoose');


const UserProduct = mongoose.model("UserProduct");

module.exports.getUserProducts = async (req, res) => {
  try{
	const userProducts = await UserProduct.find().lean();
	res.status(200).send(userProducts);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.getUserProduct = async (req, res) => {
  try {
	const { userProductId }  = req.params;
	const userProduct = UserProduct.findById(userProductId).lean();
	res.status(200).send(userProduct);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.addUserProduct = async (req, res) => {
  try{ 
	const userProduct = await UserProduct.create(req.body);
	res.status(200).send(userProduct);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.deleteUserProduct = async (req, res) => {
  try{
	const { userProductId } = req.params;
	const userProduct = await UserProduct.findByIdAndDelete(userProductId);
	res.status(200).send(userProduct);	
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.updateUserProduct = async (req, res) => {
  try { 
	const { userProductId } = req.params;
	const userProduct = await UserProduct.findOneAndUpdate({ _id: userProductId}, req.body);
	res.status.send(userProduct);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.getPopulatedUserProduct = async (req, res) => {
	try{
		const userProducts = await UserProduct.find().populate({
			path: "userId",
			populate: {
				path: "products"
			}
		});
		res.status(200).send(userProducts)
	} catch(err){
		console.log(err);
		res.status(500).send({err})
	}
}