import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";

const NewProduct = () => {
  // useState for our inputs feilds.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // create a function to add product in DB.
  const createProduct = async e => {
    e.preventDefault();
    await axios.post("/api/products", {
      title,
      description,
      price,
    });
  };

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Products</h1>
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
    </Layout>
  );
};

export default NewProduct;
