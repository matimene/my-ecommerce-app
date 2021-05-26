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
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
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
