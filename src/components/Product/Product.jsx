import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import productData from "../../data/data.json";
// icons

import basketIcn from '../../../public/images/products/product_basket_icn.svg'
import likeIcn from '../../../public/images/products/product_like_icn.svg'

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(productData.products.slice(0, 8));
  }, []);

  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product_wrapper">
            <div className="product-content">
              <h4>Новинки на сайте</h4>
              <Link to="/allProduct" style={{ textDecoration: "none" }}>
                <div>
                  <p>Смотреть все</p>
                </div>
              </Link>
            </div>
            <div className="product_cart">
              <ul className="products">
                {product.map((product) => (
                  <li key={product.id} className="product-item">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} alt={product.title} />
                      <h4>{product.title}</h4>
                      <h3>{product.price} cум</h3>
                      <div>
                        <button className="product_cart_btn_basket"><img src={basketIcn} alt="buttonIcn" />В корзину</button>
                        <button className="product_cart_btn_basket"><img src={likeIcn} alt="buttonIcn" /></button>
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

export default Product;
