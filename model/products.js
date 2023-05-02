import { model, models, Schema } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: { type: [String] },
});

export const Products = models.Products || model("Products", productSchema);
