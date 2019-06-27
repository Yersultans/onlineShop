const mongoose = require('mongoose');
const Product = mongoose.model("Product");


module.exports.getProducts = async (req, res) => {
	try{
		const products = await Product.find({});
		res.status(200).send(products);
	} catch (err) {
		console.log(err);
		res.status(500).send("Server error");

	}
}

module.exports.getProduct = async (req, res) => {
	try{
		const { productId } = req.params;
	    const product = await Product.find({ _id: {$in :  productId }}).lean();
		// if(err) {
		// 	console.log(err);
		// 	res.status(500).send({ err });
		// }
		res.status(200).send(product);
	}catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
}

module.exports.addProduct = async (req, res) => {
	try{
		const product = new Product(req.body);
		await product.save();
		//await contentRefresher();
		res.status(200).send(product);

	} catch (err) {
		console.log(err);
		res.status(500)({ err });

	}
}

module.exports.deleteProduct = async (req, res) => {
	try{
		const productId = req.params.productId;
		const result = await Product.findByIdAndDelete(productId);
		res.status(200).send(result);

	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}

module.exports.updateProduct = async (req, res) => {
	try{
		const productId = req.params.productId;
		await Product.findById(productId, function(err, product){
			 product.name = req.body.name;
			 product.price = req.body.price;
			 product.save();
			 res.status(200).send(product);

		});

		

	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}