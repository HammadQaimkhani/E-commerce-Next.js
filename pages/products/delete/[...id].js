import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DeletePage = () => {
  const [productData, setProductData] = useState("");

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/api/products?id=" + id).then(({ data }) => {
        setProductData(data);
      });
    }
  }, [id]);

  const deleteProduct = async () => {
    await axios.delete("/api/products?id=" + id);
    goBack();
  };

  //   set Route if click any button
  const goBack = () => {
    return router.push("/products");
  };
  return (
    <Layout>
      <h1 className='text-center'>
        Do you really want to delete {productData?.title}
      </h1>
      <div className='flex gap-2 justify-center'>
        <button
          onClick={deleteProduct}
          className='px-4 py-1 bg-red-500 rounded-md text-white'>
          yes
        </button>
        <button
          onClick={goBack}
          className='px-4 py-1 bg-gray-500 rounded-md text-white'>
          no
        </button>
      </div>
    </Layout>
  );
};

export default DeletePage;
