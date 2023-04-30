import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductsForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NewProduct = () => {
  return (
    <Layout>
      <h1>New Products</h1>
      <ProductForm />
    </Layout>
  );
};

export default NewProduct;
