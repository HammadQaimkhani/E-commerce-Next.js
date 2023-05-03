import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  // category states
  const [category, setCategory] = useState("");
  const [existCategory, setExistCategory] = useState("");
  const [getCategory, setGetCategory] = useState([]);

  //function to save the category data.
  const saveCategory = async e => {
    e.preventDefault();
    await axios.post("/api/category", {
      category,
    });
    setCategory("");
  };

  // useEffect to get the category data to db.
  useEffect(() => {
    axios.get("/api/category").then(response => {
      const { data } = response;
      setGetCategory(data);
    });
  }, [saveCategory]);

  return (
    <Layout>
      <h1>Categories </h1>
      <label>New Category name</label>
      <form onSubmit={saveCategory} className='flex gap-2'>
        <input
          type='text'
          value={category}
          onChange={e => setCategory(e.target.value)}
          className='mb-0 hover:border-blue-900'
          placeholder='Category name'
        />
        <select
          className='mb-0 '
          value={existCategory}
          onChange={e => setExistCategory(e.target.value)}>
          <option value='0'>none</option>
          {getCategory.length > 0 &&
            getCategory.map(item => (
              <option value={item._id}>{item.name}</option>
            ))}
        </select>

        <button type='submit' className='btn-primary'>
          Save
        </button>
      </form>

      <table className='basic mt-4'>
        <thead>
          <tr>
            <td>Category Name</td>
          </tr>
        </thead>
        <tbody>
          {getCategory.length > 0 &&
            getCategory.map(item => (
              <tr>
                <td>{item?.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default CategoriesPage;
