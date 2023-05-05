import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/model/category";

const handle = async (req, res) => {
  await mongooseConnect();
  const { method } = req;
  if (method === "POST") {
    const { category: name, parentCategory: parent } = req.body;
    const categoryDoc = await Category.create({
      name,
      parent,
    });
    res.json(categoryDoc);
  }
  if (method === "GET") {
    const getCategory = await Category.find().populate("parent");
    res.json(getCategory);
  }

  if (method === "PUT") {
    const { category, parentCategory, _id } = req.body;
    const getCategory = await Category.updateOne(
      { _id },
      {
        name: category,
        parent: parentCategory,
      }
    );
    res.json(getCategory);
  }
  // delete the category.
  if (method === "DELETE") {
    const { _id } = req.query;
    const deleteData = await Category.deleteOne({ _id });
    res.json(deleteData);
  }
};

export default handle;
