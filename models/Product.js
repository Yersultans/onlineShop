const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");

const { Schema } = mongoose;
const productschema = mongoose.Schema({
	name: String,
	price: Number
});

productschema.plugin(mongoosePaginate);
module.exports = mongoose.model("Product", productschema);