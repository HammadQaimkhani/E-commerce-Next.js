const { Schema, Types, models, model, default: mongoose } = require("mongoose");

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  parent: { type: mongoose.Types.ObjectId, ref: "Category" },
});

const Category = models?.Category || model("Category", categorySchema);
export default Category;
