const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    hasUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["PENDING", "SHIPPED", "COMPLETED", "CANCELED"],
      default: "PENDING",
    },
    items: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        skuCode: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    deliveryInfo: {
      name: {
        type: String,
        required: true,
      },
      adress: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    notes: {
      type: String,
    },
    total: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
