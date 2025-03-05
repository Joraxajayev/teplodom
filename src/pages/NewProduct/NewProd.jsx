import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productData from "../../data/data.json";
import "./NewProd.scss";
import basketIcn from "../../../public/images/products/product_basket_icn.svg";
import likeIcn from "../../../public/images/products/product_like_icn.svg";

const NewProd = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  // Хук для навигации по страницам
  const navigate = useNavigate();

  useEffect(() => {
    // Фильтруем товары, у которых isNew === true
    const newProducts = productData.products.filter((product) => product.isNew);
    setProducts(newProducts);

    // Получаем избранные товары из localStorage
    const likes = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(likes);
  }, []);

  // Обработка лайка
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

  // Проверка, лайкнут ли товар
  const isProductLiked = (productId) => {
    return likedProducts.some((item) => item.id === productId);
  };

  // Обработка перехода в корзину
  // const handleBasketClick = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   // Либо можно сразу перейти на страницу корзины:
  // };
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
    navigate("/basket");
  };

  return (
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
                  {/* 
                    Вместо одной большой ссылки на весь блок 
                    используем отдельные ссылки/элементы:
                  */}

                  {/* Ссылка на страницу товара */}
                  <Link to={`/products/${product.id}`} className="product-link">
                    <img src={product.image} alt={product.title} />
                  </Link>

                  {/* Название товара (тоже ссылка) */}
                  <Link
                    to={`/products/${product.id}`}
                    className="product-title">
                    <h4>{product.title}</h4>
                  </Link>

                  {/* Цена */}
                  <h3>{product.price} cум</h3>

                  {/* Кнопки корзины и лайка */}
                  <div className="product-buttons">
                    {/* Кнопка "В корзину" – при клике переходим на /basket */}
                    <button
                      className="product_cart_btn_basket"
                      onClick={(e) => handleAddToBasket(e, product)}>
                      <img src={basketIcn} alt="basket" />В корзину
                    </button>

                    {/* Кнопка лайка */}
                    <button
                      className={`product_cart_btn_basket ${
                        isProductLiked(product.id) ? "liked" : ""
                      }`}
                      onClick={(e) => handleLike(e, product)}>
                      <img src={likeIcn} alt="like" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProd;
