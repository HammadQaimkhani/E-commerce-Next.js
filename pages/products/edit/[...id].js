import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductsForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProduct() {
  // useState for our inputs feilds.

  const [editProduct, setEditProduct] = useState("");
  // get routes
  const router = useRouter();
  const { id } = router.query;

  // useEffect for get the data of user to edit.
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
      <h1>Edit Products</h1>
      {editProduct && <ProductForm {...editProduct} />}
    </Layout>
  );
}
