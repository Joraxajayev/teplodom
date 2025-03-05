import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../../data/data.json";

// Rasm (ikon) importlari (agar kerak bo'lsa):
import basketIcn from "../../../public/images/products/product_basket_icn.svg";
import likeIcn from "../../../public/images/products/product_like_icn.svg";

// SCSS stil (ixtiyoriy):
import "./ProductDetail.scss";

function ProductDetail() {
  const { id } = useParams(); // URL dan :id ni olish
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // miqdor (plus/minus)
  const [likedProducts, setLikedProducts] = useState([]);

  // Mahsulotni topish va localStorage'dan likedProducts'ni olish
  useEffect(() => {
    const foundProduct = productData.products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    const likes = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(likes);
  }, [id]);

  // Miqdorni oshirish
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // Miqdorni kamaytirish
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Like bosilganda
  const handleLike = (product) => {
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

  // Mahsulot like qilinganmi-yo'qmi?
  const isProductLiked = (productId) => {
    return likedProducts.some((item) => item.id === productId);
  };

  // Savatga qo'shish
  const handleAddToBasket = (product) => {
    const basketItems = JSON.parse(localStorage.getItem("basketProducts")) || [];
    // Agar savatda shu mahsulot bo'lsa, uni yangilash (masalan, quantity ni qo'shish)
    const existingItemIndex = basketItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // oldin bor bo'lsa, miqdorini oshiramiz
      const updatedItem = { ...basketItems[existingItemIndex] };
      updatedItem.quantity = (updatedItem.quantity || 1) + quantity;
      basketItems[existingItemIndex] = updatedItem;
    } else {
      // savatda bo'lmasa, yangisini qo'shamiz
      basketItems.push({ ...product, quantity });
    }
    localStorage.setItem("basketProducts", JSON.stringify(basketItems));
  };

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        {/* Chap tomonda rasm */}
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* O'ng tomonda ma'lumotlar */}
        <div className="product-detail-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-desc">{product.desc}</p>

          {/* Narx va Chegirma */}
          <div className="product-price">
            <span className="current-price">{product.price} сум</span>
            {product.isDiscount && (
              <span className="discount">
                Скидка {product.discount}%
              </span>
            )}
          </div>

          {/* Rangi (agar mavjud bo'lsa) */}
          {product.colors && product.colors.length > 0 && (
            <div className="product-colors">
              <span>Цвета: </span>
              {product.colors.map((color, index) => (
                <span key={index} className="color-badge">
                  {color}
                </span>
              ))}
            </div>
          )}

          {/* Miqdor tanlash */}
          <div className="product-quantity">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>

          {/* Savat va Like tugmalari */}
          <div className="product-actions">
            <button
              className="btn-basket"
              onClick={() => handleAddToBasket(product)}>
              <img src={basketIcn} alt="basket" />
              В корзину
            </button>
            <button
              className={`btn-like ${isProductLiked(product.id) ? "liked" : ""}`}
              onClick={() => handleLike(product)}>
              <img src={likeIcn} alt="like" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
