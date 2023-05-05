import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ProductForm = ({
  _id,
  title: editTitle,
  description: editDescription,
  price: editPrice,
  images,
}) => {
  // useState for our inputs feilds.
  const [title, setTitle] = useState(editTitle || "");
  const [description, setDescription] = useState(editDescription || "");
  const [price, setPrice] = useState(editPrice || "");
  const [gotoProducts, setGotoProducts] = useState(false);

  //useRouter to set the routes.
  const router = useRouter();

  // create a function to add product in DB.
  const createProduct = async e => {
    e.preventDefault();
    if (_id) {
      // update.
      await axios.put("/api/products", {
        _id,
        title,
        description,
        price,
      });
    } else {
      // create
      const data = { title, description, price };
      await axios.post("/api/products", data);
    }
    setGotoProducts(true);
  };

  // upload Images.
  const uploadImages = async e => {
    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("files", file);
      }
      const response = await axios.post("/api/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
    }
  };

  // set route after the click the button
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
      {/* Images... */}
      <label>Photos</label>
      <div className='mb-2'>
        <label className='flex gap-1 border-2 bg-gray-100 border-gray-200 w-32 h-32 items-center rounded-lg justify-center text-gray-500 cursor-pointer border-dashed '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15'
            />
          </svg>
          <div>Uploads</div>
          <input type='file' className='hidden' onChange={uploadImages} />
        </label>
      </div>

      {/* description */}
      <label>Description</label>
      <textarea
        className='h-28'
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
