const { Schema, Types, models, model, default: mongoose } = require("mongoose");

const uploadSchema = new Schema({
  name: { type: String, required: true, unique: true },
  parent: { type: mongoose.Types.ObjectId, ref: "Category" },
});

const Upload = models?.Upload || model("Upload", uploadSchema);
export default Upload;
