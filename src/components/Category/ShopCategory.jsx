import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.scss";
import categoryData from "../../data/data.json";

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData.categories.slice(0, 6));
  }, []);

  return (
    <>
      <section className="category">
        <div className="container">
          <div className="category_wrapper">
            <div className="category-content">
              <h4>Категории</h4>
              <Link to="/allCategory" style={{ textDecoration: "none" }}>
                <div>
                  <p>Все категории</p>
                </div>
              </Link>
            </div>
            <div className="category_cart">
              <ul className="categoryes">
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
    </>
  );
};

export default ShopCategory;
