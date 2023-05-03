import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/model/category";

const handle = async (req, res) => {
  await mongooseConnect();
  const { method } = req;
  if (method === "POST") {
    const { category: name } = req.body;
    const categoryDoc = await Category.create({
      name,
    });
    res.json(categoryDoc);
  }
  if (method === "GET") {
    const getCategory = await Category.find();
    res.json(getCategory);
  }
};

export default handle;
