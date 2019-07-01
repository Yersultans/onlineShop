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
	const product = await Product.findById(productId).lean();
	res.status(200).send(product);
  }catch (err) {
	console.log(err);
	res.status(500).send(err);
  }
}

module.exports.addProduct = async (req, res) => {
  try{
	const product = await Product.create(req.body);
	res.status(200).send(product);

  } catch (err) {
	console.log(err);
	res.status(500)({ err });
  }
}

module.exports.deleteProduct = async (req, res) => {
  try{
	const { productId } = req.params;
	const result = await Product.findByIdAndDelete(productId);
	res.status(200).send(result);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.updateProduct = async (req, res) => {
  try{
	const { productId } = req.params;
	const product = await Product.findOneAndUpdate({_id: product}, req.body);
	res.status(200).send(product);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}