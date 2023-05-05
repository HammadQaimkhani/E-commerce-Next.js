import { mongooseConnect } from "@/lib/mongoose";
import { Products } from "@/model/products";
import multiparty from "multiparty";
import { resolve } from "styled-jsx/css";

const handle = async (req, res) => {
  await mongooseConnect();
  const { method } = req;
  const { fields, files } = await new Promise((resolve, reject) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
      if (err) throw reject(err);
      resolve({ fields, files });
    });
  });

  console.log("length", files.files.length);
  res.json("ok");
  if (method === "POST") {
    // const
  }
};

export default handle;
export const config = {
  api: {
    bodyParser: false,
  },
};
