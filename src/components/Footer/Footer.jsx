import React from "react";
import { Link } from "react-router-dom";
//Images
import copyRight from "../../assets/footer/copright.svg";
import footerLogo from "../../assets/footer/footer_logo.svg";
import location from "../../assets/footer/location_icn.svg";
import telegram from "../../assets/footer/tg_icn.svg";
import instagram from "../../assets/footer/insta_icn.svg";
import facebook from "../../assets/footer/face_icn.svg";
import browser from "../../assets/footer/brows_icn.svg";
import phoneIcn from "../../assets/footer/phone_icn.svg";
//styles
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer_wrapper">
            <div className="footer_top">
              <div className="footer_top_logo">
                <Link to="/">
                  <img src={footerLogo} alt="logo" />
                </Link>
                <div className="footer_top_loc">
                  <img src={location} alt="location" />{" "}
                  <p>
                    ул.Уста Ширин, рынок <br /> Джамий, дом 134
                  </p>
                </div>
              </div>
              <ul className="footer_quick_links">
                <h4>Быстрые ссылки</h4>
                <Link>
                  <li className="footer_quick_link">Мастерам</li>
                </Link>
                <Link>
                  <li className="footer_quick_link">Оформление заказа</li>
                </Link>
                <Link>
                  <li className="footer_quick_link">
                    Пользовательское соглашение
                  </li>
                </Link>
              </ul>
              <ul className="footer_useful_links">
                <h4>Полезное</h4>
                <Link>
                  <li className="footer_useful_link">О нас</li>
                </Link>
                <Link>
                  <li className="footer_useful_link">Поставщикам</li>
                </Link>
                <Link>
                  <li className="footer_useful_link">Возврат товара</li>
                </Link>
              </ul>
              <ul className="footer_contact">
                <h4>Контакты</h4>
                <Link to="tel:+998 97 761 62 51">
                  <li className="footer_contact_item">
                    <img src={phoneIcn} alt="icn" />
                    +998 97 761 62 51
                  </li>
                </Link>
                <Link to="tel:+998 97 761 62 51">
                  <li className="footer_contact_item">
                    <img src={phoneIcn} alt="icn" />
                    +998 93 556 91 31
                  </li>
                </Link>
                <li className="footer_contact_item_social">
                  <Link to="https://t.me" target="_blank">
                    <img src={telegram} alt="telegram" />
                  </Link>
                  <Link to="https://instagram.com" target="_blank">
                    <img src={instagram} alt="telegram" />
                  </Link>
                  <Link to="https://meta.com" target="_blank">
                    <img src={facebook} alt="telegram" />
                  </Link>
                  <Link to="https://google.com" target="_blank">
                    <img src={browser} alt="telegram" />
                  </Link>
                </li>
              </ul>
              <div className="footer_top_loc_mobile">
                <img src={location} alt="location" />
                <p>
                  ул.Уста Ширин, рынок <br /> Джамий, дом 134
                </p>
              </div>
            </div>
            <div className="footer_bottom">
              <hr className="footer_line" />
              <div>
                <img src={copyRight} alt="" />
                <span>2021 Teplodom. Все права защищены</span>
              </div>
              <hr className="footer_line" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
