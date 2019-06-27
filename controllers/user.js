const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.getUsers = async (req, res) => {
	try {
		const  users  = await User.find({});
		// if(err) { 
		// 	console.log(err);
		// 	res.status(500).send({ err });
		// }
		res.status(200).send(users);
	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	} 
}

module.exports.getUser = async (req, res) => {
	try { 
		const { userId } = req.params;
		const  user  = await User.find({ _id: {$in: userId }}).lean();
		// if(err) {
		// 	console.log(err);
		// 	res.status(500).send({ err });
		// }

		res.status(200).send(user);


	} catch (err) {
		console.log(err);
		res.status(500),send({ err });
	}
}


module.exports.addUser = async (req, res) => {
	try {
	const user = new User(req.body);
	await user.save();
	//await contentRefresh();
	res.status(200).send(user);
	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}

module.exports.deleteUser = async (req, res) => {
	try {
		const userId = req.params.userId;
		const [ err, user ] = await User.findByIdAndDelete(userId ).lean();
		if(err){
			console.log(err);
			res.status(500).send({ err });
		}

		res.status(200).send(user);

	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}


module.exports.updateUser = async (req, res) => {
	try{
		const userId = req.params.userId;
		await User.update({ _id: userId }, req.body);
		const  user  = await User.findById( userId, function(err, user){
			user.name = req.body.name;
			user.surname = req.body.surname;
			user.login = req.body.login;
			user.password = req.body.password;
			user.save();
			res.status(200).send(user);
		});
		// if(err){
		// 	console.log(err);
		// 	res.status(500).send({ err });
		// }

		res.status(200).send(user);



	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
}