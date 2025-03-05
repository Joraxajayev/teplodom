import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import productData from "../../data/data.json";
// icons

import basketIcn from "../../../public/images/products/product_basket_icn.svg";
import likeIcn from "../../../public/images/products/product_like_icn.svg";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    setProduct(productData.products.slice(0, 8));
    // Get liked products from localStorage
    const likes = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(likes);
  }, []);

  const handleLike = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const isLiked = likedProducts.some((item) => item.id === product.id);

    if (!isLiked) {
      const newLikes = [...likedProducts, product];
      setLikedProducts(newLikes);
      localStorage.setItem("likedProducts", JSON.stringify(newLikes));
    } else {
      const updatedLikes = likedProducts.filter(
        (item) => item.id !== product.id
      );
      setLikedProducts(updatedLikes);
      localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
    }
  };

  const isProductLiked = (productId) => {
    return likedProducts.some((item) => item.id === productId);
  };

  const handleAddToBasket = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const basketItems =
      JSON.parse(localStorage.getItem("basketProducts")) || [];
    const isInBasket = basketItems.some((item) => item.id === product.id);

    if (!isInBasket) {
      const newBasketItems = [...basketItems, product];
      localStorage.setItem("basketProducts", JSON.stringify(newBasketItems));
    }
  };

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
                      <div className="product-buttons">
                        <button
                          className="product_cart_btn_basket"
                          onClick={(e) => handleAddToBasket(e, product)}>
                          <img src={basketIcn} alt="basket" />В корзину
                        </button>
                        <button
                          className={`product_cart_btn_basket ${
                            isProductLiked(product.id) ? "liked" : ""
                          }`}
                          onClick={(e) => handleLike(e, product)}>
                          <img src={likeIcn} alt="buttonIcn" />
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

export default Product;
