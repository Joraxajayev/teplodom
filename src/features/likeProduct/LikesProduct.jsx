import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LikesProduct.scss";
import basketIcn from '../../../public/images/products/product_basket_icn.svg';
import deleteIcon from '../../../public/images/products/delete-icon.svg';


const LikesProduct = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    // Get liked products from localStorage
    const likes = JSON.parse(localStorage.getItem('likedProducts')) || [];
    setLikedProducts(likes);
  }, []);

  const removeLike = (productId) => {
    const updatedLikes = likedProducts.filter(product => product.id !== productId);
    setLikedProducts(updatedLikes);
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
  };

  const addToBasket = (product) => {
    const basketItems = JSON.parse(localStorage.getItem('basketProducts')) || [];
    const isInBasket = basketItems.some(item => item.id === product.id);
    
    if (!isInBasket) {
      const newBasketItems = [...basketItems, product];
      localStorage.setItem('basketProducts', JSON.stringify(newBasketItems));
      alert('Товар добавлен в корзину!');
    } else {
      alert('Этот товар уже в корзине!');
    }
  };

  return (
    <section className="likes-product">
      <div className="container">
        <div className="likes-product_wrapper">
          <div className="likes-product_content">
            <h2>Избранные товары</h2>
          </div>
          <div className="product_cart">
            {likedProducts.length === 0 ? (
              <div className="empty-message">
                <h3>У вас пока нет избранных товаров</h3>
                <Link to="/" className="continue-shopping">Продолжить покупки</Link>
              </div>
            ) : (
              <ul className="products">
                {likedProducts.map((product) => (
                  <li key={product.id} className="product-item">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-info">
                      <h4>{product.title}</h4>
                      <h3>{product.price} cум</h3>
                      <div className="product-buttons">
                        <button 
                          className="product_cart_btn_basket basket-btn"
                          onClick={() => addToBasket(product)}
                        >
                          <img src={basketIcn} alt="basket" />
                          В корзину
                        </button>
                        <button 
                          className="product_cart_btn remove-btn"
                          onClick={() => removeLike(product.id)}
                        >
                          <img src={deleteIcon} alt="remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LikesProduct;