import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryData from "../../data/data.json";
import "./AllCategory.scss";

const AllCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData.categories);
  }, []);

  return (
    <section className="all-category">
      <div className="container">
        <div className="all-category_wrapper">
          <div className="all-category-content">
            <h2>Все категории</h2>
          </div>
          <div className="category_cart">
            <ul className="categories">
              {categories.map((category) => (
                <li key={category.id} className="category-item">
                  <Link to={`/category/${category.id}`}>
                    <img src={category.image} alt={category.title} />
                    <h3>{category.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategory;
