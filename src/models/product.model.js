import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "No name",
      required: true,
    },
    size: {
      m: { type: Number, default: 12 },
      l: { type: Number, default: 12 },
      xl: { type: Number, default: 12 },
    },
    price_prev: {
      type: String,
      default: "16.000.000",
      required: true,
    },
    price_now: {
      type: String,
      default: "16.000.000",
      required: true,
    },
    color: {
      type: String,
      default: "No color",
      // required: true,
    },
    category: {
      type: String,
      default: "men",
      enum: ["men", "girl", "couple"],
      required: true,
    },
    description: {
      type: String,
      default: "No description",
      // required: true,
    },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", schema);
