const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const userproductschema = mongoose.Schema({
	userId: { type: Schema.Types.ObjectId, ref: "User"},
	productId: { type: Schema.Types.ObjectId, ref: "Product"}
});

userproductschema.plugin(mongoosePaginate);
module.exports = mongoose.model("UserProduct", userproductschema);
