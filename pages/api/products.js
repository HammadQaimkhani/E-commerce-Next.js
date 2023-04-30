import { mongooseConnect } from "@/lib/mongoose";
import { Products } from "@/model/products";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Products.find());
  }

  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Products.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }
};

export default handle;
