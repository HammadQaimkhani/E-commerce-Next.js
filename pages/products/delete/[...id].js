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

  //   set Route if click any button
  const goBack = () => {
    return router.push("/products");
  };
  return (
    <Layout>
      <h1>Do you really want to delete {productData.titles} </h1>
      <button>yes</button>
      <button onClick={goBack}>no</button>
    </Layout>
  );
};

export default DeletePage;
