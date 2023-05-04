import Layout from "@/components/Layout";
import { data } from "autoprefixer";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  // category states
  const [editCategory, setEditCategory] = useState(null);
  const [category, setCategory] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [getCategory, setGetCategory] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  // func to get the category data to db.
  const fetchCategory = async () => {
    axios.get("/api/category").then(response => {
      const { data } = response;
      setGetCategory(data);
    });
  };

  //function to save the category data.
  const saveCategory = async e => {
    e.preventDefault();
    if (editCategory) {
      const data = { category, parentCategory };
      data._id = editCategory._id;
      await axios.put("/api/category", data);
    } else {
      await axios.post("/api/category", {
        category,
        parentCategory,
      });
      setCategory("");
      fetchCategory();
    }
  };

  // onClick method on edit button.
  const editCategoryFunc = data => {
    setEditCategory(data);
    setCategory(data.name);
    setParentCategory(data?.parent?._id);
  };

  return (
    <Layout>
      <h1>Categories </h1>
      <label>
        {editCategory
          ? `Edit Category ${editCategory.name}`
          : "New Category name"}
      </label>
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
          value={parentCategory}
          onChange={e => setParentCategory(e.target.value)}>
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
            <td>Parent Category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {getCategory.length > 0 &&
            getCategory.map(item => (
              <tr>
                <td>{item?.name}</td>
                <td>{item?.parent?.name}</td>
                <td className='flex gap-2 '>
                  <button
                    className='btn-primary '
                    onClick={() => editCategoryFunc(item)}>
                    edit
                  </button>
                  <button className='btn-primary'>delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default CategoriesPage;
