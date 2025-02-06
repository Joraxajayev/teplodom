import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import searchIcn from "../../../assets/search_icn.svg";
import like from "../../../assets/heart_icn.svg";
import basket from "../../../assets/cart_icn.svg";
import user from "../../../assets/user_icn.svg";

import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("newProd");

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-top">
          <div className="nav-logo">
            <Link to='/'>
            
            <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="searchContainer">
            <img src={searchIcn} alt="" />
            <input type="text" placeholder="Поиск..." className="searchInput" />
          </div>
          <div className="likes">
            {/* <Link style={{ textDecoration: "none" }}> */}
            <img src={like} alt="likes" />
            {/* </Link> */}
          </div>
          <div className="cart">
            {/* <Link style={{ textDecoration: "none"}}> */}
            <img src={basket} alt="cart" />
            {/* </Link> */}
            {/* <div className="nav_cart_count">0</div> */}
          </div>
          <div className="profile">
            {/* <Link style={{ textDecoration: "none"}}> */}
            <img src={user} alt="profile" />
            <span>Профиль</span>
            {/* </Link> */}
          </div>
        </div>
        <div className="nav-end">
          <ul className="nav_menu">
            <Link
              to="/sale"
              style={{ textDecoration: "none", color: "#ffffff" }}>
              <li
                onClick={() => {
                  setMenu("sale");
                }}
                className={menu === "sale" ? "active" : ""}>
                Товары по акции
              </li>
            </Link>
            <Link
              to="/newProd"
              style={{ textDecoration: "none", color: "#ffffff" }}>
              <li
                onClick={() => {
                  setMenu("newProd");
                }}
                className={menu === "newProd" ? "active" : ""}>
                Новинки
              </li>
            </Link>
            <Link
              to="/suppliers"
              style={{ textDecoration: "none", color: "#ffffff" }}>
              <li
                onClick={() => {
                  setMenu("suppliers");
                }}
                className={menu === "suppliers" ? "active" : ""}>
                Поставщикам
              </li>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#ffffff" }}>
              <li
                onClick={() => {
                  setMenu("contact");
                }}
                className={menu === "contact" ? "active" : ""}>
                Контакты
              </li>
            </Link>
            <Link
              to="/withdrawal"
              style={{ textDecoration: "none", color: "#ffffff" }}>
              <li
                onClick={() => {
                  setMenu("withdrawal");
                }}
                className={menu === "withdrawal" ? "active" : ""}>
                Возврат товара
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
