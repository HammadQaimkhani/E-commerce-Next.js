import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link
        href={"/products/new"}
        className='bg-blue-900 text-white p-2 rounded-lg'>
        Add new products
      </Link>
    </Layout>
  );
}
