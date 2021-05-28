const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategories: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  skuCode: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});

productSchema.plugin(uniqueValidator);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
