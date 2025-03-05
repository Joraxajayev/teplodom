import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productData from "../../data/data.json";
import "./Sale.scss";

import basketIcn from "../../../public/images/products/product_basket_icn.svg";
import likeIcn from "../../../public/images/products/product_like_icn.svg";

const Sale = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    // Faqat isDiscount === true bo'lgan mahsulotlarni filter qilamiz
    const discountedProducts = productData.products.filter(
      (item) => item.isDiscount === true
    );
    setProducts(discountedProducts);

    // LocalStorage'dan 'likedProducts'ni olish
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
    <section className="sale">
      <div className="container">
        <div className="sale_wrapper">
          <div className="sale_content">
            <h2>Товары по акции</h2>
          </div>
          <div className="product_cart">
            <ul className="products">
              {products.map((product) => {
                // Yangi narxni hisoblash
                const numericPrice = parseInt(
                  product.price.replace(/\s/g, ""),
                  10
                );
                const discountedPrice =
                  numericPrice - (numericPrice * product.discount) / 100;

                return (
                  <li key={product.id} className="product-item">
                    <Link to={`/products/${product.id}`}>
                      {/* "Акция" belgisi */}
                      {product.isDiscount && (
                        <div className="product-discount-badge">Акция</div>
                      )}

                      <img src={product.image} alt={product.title} />
                      <h4>{product.title}</h4>

                      {/* Eski va yangi narxni ko'rsatish */}

                      <div className="price-wrapper">
                        <span className="old-price">{product.price} сум</span>
                        <span className="new-price">
                          {discountedPrice.toLocaleString()} сум
                        </span>
                      </div>

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
                          <img src={likeIcn} alt="like" />
                        </button>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
