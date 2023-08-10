import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";

const FilterCategory = () => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

  const [categories, getAllCategories] = useFetch(baseUrl);

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  // console.log(categories);

  const dispatch = useDispatch();

  const handleFilterCategory = (id) => {
    if (id) {
      const url = `https://node-entregable-6-ecommerce.onrender.com/products?title=&categoryId=${id}`;
      dispatch(getAllProductsThunk(url));
    } else {
      dispatch(getAllProductsThunk());
    }
  };

  return (
    <article>
      <h3>Categories</h3>
      <ul>
        <li style={{ cursor: "pointer" }} onClick={()=>handleFilterCategory()}>
          All categories
        </li>
        {categories?.map((category) => (
          <li
            onClick={() => handleFilterCategory(category.id)}
            style={{ cursor: "pointer" }}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
