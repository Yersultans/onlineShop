const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const reviewschema = mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  productId: { type: Schema.Types.ObjectId, ref: "Product"},
  text: String,
  point: Number
});

reviewschema.plugin(mongoosePaginate);
module.exports = mongoose.model("Review", reviewschema);