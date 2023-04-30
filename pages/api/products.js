import { mongooseConnect } from "@/lib/mongoose";
import { Products } from "@/model/products";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  // get req
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Products.findOne({ _id: req.query.id }));
    } else {
      res.json(await Products.find());
    }
  }

  // post req
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Products.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }
  // put req
  if (method === "PUT") {
    const { title, description, price, _id } = req.body;
    const updateData = await Products.updateOne(
      { _id },
      { title, description, price }
    );
    res.json(updateData);
  }
};

export default handle;
