const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const storeSchema = new mongoose.Schema({
  newProducts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  categories: [
    {
      type: String,
    },
  ],
  filters: [
    {
      type: String,
    },
  ],
  discountCodes: [
    {
      type: String,
      unique: true,
    },
  ],
});

storeSchema.plugin(uniqueValidator);

const Store = mongoose.model("Store", storeSchema);

module.exports = { Store };
