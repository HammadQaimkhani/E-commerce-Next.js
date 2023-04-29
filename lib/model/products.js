import mongoose, { Model, Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  description: String,
  price: String,
});

const Products = new Model("products", productSchema);
export default Products;
