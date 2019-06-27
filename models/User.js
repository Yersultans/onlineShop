const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");

const { Schema } = mongoose;
const userschema = mongoose.Schema({
	name: String,
	surname: String,
	login: String,
	password:String
});
userschema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", userschema);
