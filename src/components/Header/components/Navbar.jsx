import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import searchIcon from "@/assets/search_icn.svg";
import heartIcon from "@/assets/heart_icn.svg";
import cartIcon from "@/assets/cart_icn.svg";
import userIcon from "@/assets/user_icn.svg";

import "../styles/Navbar.scss";

const Navbar = () => {
  // useLocation orqali joriy URL manzilini olamiz
  const location = useLocation();

  // Belgilangan yo'l joriy manzilga teng bo'lsa, true qaytaradi
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        {/* Yuqori qism */}
        <div className="nav-top">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="search_input">
            <div className="menu_sidebar_content">
              <label htmlFor="menuopener" className="menu_sidebar" />
            </div>
            <div className="searchContainer">
              <img src={searchIcon} alt="Search" />
              <input
                type="text"
                placeholder="Поиск..."
                className="searchInput"
              />
            </div>
            <div className="menu_settings_content">
              <label htmlFor="menuopener" className="menu_settings" />
            </div>
          </div>
          <div className="nav_btns">
            <Link to="/likes" style={{ textDecoration: "none" }}>
              <div className="likes">
                <img src={heartIcon} alt="Likes" />
              </div>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="cart">
                <img src={cartIcon} alt="Cart" />
              </div>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <div className="profile">
                <img src={userIcon} alt="Profile" />
                <span>Профиль</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigatsiya menyusi */}
        <div className="nav-end">
          <input type="checkbox" id="menuopener" />
          <ul className="nav_menu">
            <Link to="/sale" style={{ textDecoration: "none" }}>
              <li className={isActive("/sale") ? "active" : ""}>
                Товары по акции
                <hr className="nav_line" />
              </li>
            </Link>
            <Link to="/newProd" style={{ textDecoration: "none" }}>
              <li className={isActive("/newProd") ? "active" : ""}>
                Новинки
                <hr className="nav_line" />
              </li>
            </Link>
            <Link to="/suppliers" style={{ textDecoration: "none" }}>
              <li className={isActive("/suppliers") ? "active" : ""}>
                Поставщикам
                <hr className="nav_line" />
              </li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li className={isActive("/contact") ? "active" : ""}>
                Контакты
                <hr className="nav_line" />
              </li>
            </Link>
            <Link to="/withdrawal" style={{ textDecoration: "none" }}>
              <li className={isActive("/withdrawal") ? "active" : ""}>
                Возврат товара
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
