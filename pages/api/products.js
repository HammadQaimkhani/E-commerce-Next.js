import Products from "../products";

export default function handle(req, res) {
  const { method } = req;
  if (method === "POST") {
    const { title, description, price } = req.body;
    res.json(
      Products.create({
        title,
        description,
        price,
      })
    );
  }
  res.json("error");
}
