const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.getUsers = async (req, res) => {
  try {
	const users = await User.find();
	res.status(200).send(users);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  } 
}

module.exports.getUser = async (req, res) => {
  try { 
    const { userId } = req.params;
	const user = await User.findById(userId).lean();
	res.status(200).send(user);
  } catch (err) {
	console.log(err);
	res.status(500),send({ err });
  }
}

module.exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
	res.status(200).send(user);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.deleteUser = async (req, res) => {
  try {
	const { userId} = req.params;
	const user = await User.findByIdAndDelete(userId);
	res.status(200).send(user);
  } catch (err) {
	console.log(err);
	res.status(500).send({ err });
  }
}

module.exports.updateUser = async (req, res) => {
  try{
	const { userId } = req.params;
	const user = await User.findOneAndUpdate({ _id: userId }, req.body);
	res.status(200).send(user);
  } catch (err) {
		console.log(err);
		res.status(500).send({ err });
  }
}