const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");

const { Schema } = mongoose;
const UserSchema = mongoose.Schema({
  name: String,
  surname: String,
  login: String,
  password:String,
  products: [{ type: Schema.Types.ObjectId, ref: "UserProdect"}],
});
UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("User", UserSchema);
