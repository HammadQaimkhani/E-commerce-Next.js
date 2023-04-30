import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ProductForm = ({
  title: editTitle,
  description: editDescription,
  price: editPrice,
}) => {
  // useState for our inputs feilds.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gotoProducts, setGotoProducts] = useState(false);

  //useRouter to set the routes.
  const router = useRouter();

  // create a function to add product in DB.
  const createProduct = async e => {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
    setGotoProducts(true);
  };
  if (gotoProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={createProduct}>
      {/* product */}
      <label>Product Name</label>
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='product name'
        className='focus:border-blue-900'
      />
      {/* description */}
      <label>Description</label>
      <textarea
        className=''
        placeholder='Description '
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <label>Price ($USD)</label>
      <input
        type='text'
        placeholder='price'
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button className='btn-primary' type='submit'>
        Save
      </button>
    </form>
  );
};

export default ProductForm;
