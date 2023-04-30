import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProduct() {
  // useState for our inputs feilds.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gotoProducts, setGotoProducts] = useState(false);
  const [editProduct, setEditProduct] = useState("");
  // get routes
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then(({ data }) => {
      setEditProduct(data);
    });
  }, [id]);
  return (
    <Layout>
      <form>
        <h1>Edit Products</h1>
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
}
