const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const UserProductSchema = mongoose.Schema({
	userId: { type: Schema.Types.ObjectId, ref: "User"},
	productId: { type: Schema.Types.ObjectId, ref: "Product"}
});

UserProductSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("UserProduct", UserProductSchema);
