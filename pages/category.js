import Layout from "@/components/Layout";
import { useState } from "react";

const CategoriesPage = () => {
  // category states
  const [category, setCategory] = useState("");
  //function to save the category data.
  const submitCategory = e => {
    e.preventDefault();
  };

  return (
    <Layout>
      <h1>Categories </h1>
      <label>New Category name</label>
      <form onSubmit={submitCategory} className='flex gap-2'>
        <input
          type='text'
          value={category}
          onChange={e => setCategory(e.target.value)}
          className='mb-0 hover:border-blue-900'
          placeholder='Category name'
        />
        <button type='submit' className='btn-primary'>
          Save
        </button>
      </form>
    </Layout>
  );
};

export default CategoriesPage;
