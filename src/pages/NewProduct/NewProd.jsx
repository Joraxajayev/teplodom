import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productData from "../../data/data.json";
import "./NewProd.scss";
import basketIcn from '../../../public/images/products/product_basket_icn.svg';
import likeIcn from '../../../public/images/products/product_like_icn.svg';

const NewProd = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filter new products
    const newProducts = productData.products.filter(product => product.isNew);
    setProducts(newProducts);
  }, []);

  return (
    <>
      <section className="newProd">
        <div className="container">
          <div className="newProd_wrapper">
            <div className="newProd_content">
              <h2>Новинки</h2>
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

export default NewProd;
