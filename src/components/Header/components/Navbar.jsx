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
            <div className="likes">
              <Link to="/likes" style={{ textDecoration: "none" }}>
                <img src={heartIcon} alt="Likes" />
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <img src={cartIcon} alt="Cart" />
              </Link>
            </div>
            <div className="profile">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <img src={userIcon} alt="Profile" />
                <span>Профиль</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigatsiya menyusi */}
        <div className="nav-end">
          <input type="checkbox" id="menuopener" />
          <ul className="nav_menu">
            <li className={isActive("/sale") ? "active" : ""}>
              <Link
                to="/sale"
                style={{ textDecoration: "none", }}
              >
                Товары по акции
              </Link>
                <hr className="nav_line" />
            </li>
            <li className={isActive("/newProd") ? "active" : ""}>
              <Link
                to="/newProd"
                style={{ textDecoration: "none", }}
              >
                Новинки
              </Link>
                <hr className="nav_line" />
            </li>
            <li className={isActive("/suppliers") ? "active" : ""}>
              <Link
                to="/suppliers"
                style={{ textDecoration: "none", }}
              >
                Поставщикам
              </Link>
                <hr className="nav_line" />
            </li>
            <li className={isActive("/contact") ? "active" : ""}>
              <Link
                to="/contact"
                style={{ textDecoration: "none", }}
              >
                Контакты
              </Link>
                <hr className="nav_line" />
            </li>
            <li className={isActive("/withdrawal") ? "active" : ""}>
              <Link
                to="/withdrawal"
                style={{ textDecoration: "none", }}
              >
                Возврат товара
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
