import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BasketProduct.scss";
import deleteIcon from "../../../public/images/products/delete-icon.svg";
import oformit from "../../../public/images/products/oformilenia_icn.svg";

const BasketProduct = () => {
  const [basketProducts, setBasketProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Get basket products from localStorage
    const basket = JSON.parse(localStorage.getItem("basketProducts")) || [];
    setBasketProducts(basket);
    // Calculate total price
    const total = basket.reduce((sum, product) => sum + product.price, 0);
    setTotalPrice(total);
  }, []);

  const removeFromBasket = (productId) => {
    const updatedBasket = basketProducts.filter(
      (product) => product.id !== productId
    );
    setBasketProducts(updatedBasket);
    localStorage.setItem("basketProducts", JSON.stringify(updatedBasket));
    // Update total price
    const total = updatedBasket.reduce(
      (sum, product) => sum + product.price,
      0
    );
    setTotalPrice(total);
  };

  const handleCheckout = () => {
    alert("Переход к оформлению заказа");
    // Add your checkout logic here
  };

  return (
    <section className="basket-product">
      <div className="container">
        <div className="basket-product_wrapper">
          <div className="basket-product_content">
            <h2>Корзина</h2>
          </div>
          <div className="product_cart">
            {basketProducts.length === 0 ? (
              <div className="empty-message">
                <h3>Ваша корзина пуста</h3>
                <Link to="/" className="continue-shopping">
                  Продолжить покупки
                </Link>
              </div>
            ) : (
              <>
                <ul className="products">
                  {basketProducts.map((product) => (
                    <li key={product.id} className="product-item">
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className="product-info">
                        <h4>{product.title}</h4>
                        <h3>{product.price} cум</h3>
                        <div className="product-buttons">
                          <button
                            className="product_cart_btn_basket checkout-btn"
                            onClick={handleCheckout}>
                            <img src={oformit} alt="remove" />
                            Оформить
                          </button>
                          <button
                            className="product_cart_btn remove-btn"
                            onClick={() => removeFromBasket(product.id)}>
                            <img src={deleteIcon} alt="remove" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="basket-summary">
                  <div className="total-price">
                    <h3>Итого:</h3>
                    <h3>{totalPrice} cум</h3>
                  </div>
                  <button className="checkout-all-btn" onClick={handleCheckout}>
                    Оформить все
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketProduct;
