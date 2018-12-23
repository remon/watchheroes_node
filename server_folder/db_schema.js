const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  mongoosePaginate = require("mongoose-paginate-v2");

// this will be our data base's data structure

const Hero = new Schema({
  id: Number,
  name: String,
  image: String,
  role: String,
  details: Object
});
Hero.plugin(mongoosePaginate);
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Hero", Hero);
