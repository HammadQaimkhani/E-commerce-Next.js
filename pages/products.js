import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState("");
  // useEffect for get the data from user
  useEffect(() => {
    axios.get("/api/products").then(response => {
      setProductData(response.data);
    });
  }, []);

  return (
    <Layout>
      <Link
        href={"/products/new"}
        className='bg-blue-900 text-white p-2 rounded-lg'>
        Add new products
      </Link>
      <table>
        <thead>
          <tr>
            <td>Products Name</td>
          </tr>
        </thead>
      </table>
    </Layout>
  );
};
export default Products;
