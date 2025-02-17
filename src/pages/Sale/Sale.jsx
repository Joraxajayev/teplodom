import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productData from "../../data/data.json";
import "./Sale.scss";
import basketIcn from '../../../public/images/products/product_basket_icn.svg';
import likeIcn from '../../../public/images/products/product_like_icn.svg';

const Sale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // For demo, showing first 8 products as sale items
    // You can modify this filter based on your sale criteria
    setProducts(productData.products.slice(0, 8));
  }, []);

  return (
    <>
      <section className="sale">
        <div className="container">
          <div className="sale_wrapper">
            <div className="sale_content">
              <h2>Товары по акции</h2>
            </div>
            <div className="product_cart">
              <ul className="products">
                {products.map((product) => (
                  <li key={product.id} className="product-item">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} alt={product.title} />
                      <h4>{product.title}</h4>
                      <h3>{product.price} cум</h3>
                      <div>
                        <button className="product_cart_btn_basket">
                          <img src={basketIcn} alt="basket" />В корзину
                        </button>
                        <button className="product_cart_btn_basket">
                          <img src={likeIcn} alt="like" />
                        </button>
                      </div>
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

export default Sale;
