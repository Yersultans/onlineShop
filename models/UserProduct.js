const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const userproductschema = mongoose.Schema({
	user_id: { type: Schema.Types.ObjectId, ref: "User"},
	product_id: { type: Schema.Types.ObjectId, ref: "Product"}
});

userproductschema.plugin(mongoosePaginate);
module.exports = mongoose.model("UserProduct", userproductschema);
