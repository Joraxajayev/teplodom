import React from "react";
import { Link } from "react-router-dom";
import phoneCon from "../../assets/contact/phone-con.svg";
import locationCon from "../../assets/contact/location-con.svg";
import mailCon from "../../assets/contact/email-con.svg";
import scheduleCon from "../../assets/contact/schedule-con.svg";
import timeCon from "../../assets/contact/time-con.svg";

import "../Contact/Contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact_wrapper">
            <div className="contact_content">
              <h2>Контакты</h2>
              <ul className="contact_content_list">
                <li className="contact_content_list_item">
                  <img src={phoneCon} alt="phone" />
                  <h4>Телефон</h4>
                  <Link to="tel:+998 (97) 761 62 51">
                    <p>+998 (97) 761 62 51</p>
                  </Link>
                </li>
                <li className="contact_content_list_item">
                  <img src={locationCon} alt="Location" />
                  <h4>Локация</h4>
                  <Link>
                    <p>
                      {" "}
                      ул. Уста Ширин, рынок Джамий,
                      <br /> дом 134, магазин 131
                    </p>
                  </Link>
                </li>
                <li className="contact_content_list_item">
                  <img src={mailCon} alt="E-mail" />
                  <h4>Е-майл</h4>
                  <Link to="email:Sardorraimov@gmail.com">
                    <p>Sardorraimov@gmail.com</p>
                  </Link>
                </li>
                <li className="contact_content_list_item">
                  <img src={phoneCon} alt="phone" />
                  <h4>Телефон</h4>
                  <Link to="tel:+998 (97) 761 62 51">
                    <p>+998 (93) 556 91 31</p>
                  </Link>
                </li>
                <li className="contact_content_list_item">
                  <img src={scheduleCon} alt="Schedule" />
                  <h4>Расписание</h4>
                  <Link>
                    <p>
                      Мы в вашем распоряжении <br /> 7 дней в неделю!
                    </p>
                  </Link>
                </li>
                <li className="contact_content_list_item">
                  <img src={timeCon} alt="Schedule" />
                  <h4>Время</h4>
                  <Link>
                    <p>Каждый день с 8:00 – 18:00</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact_form">
              <div className="contact_section_content">
              <h2>Заказать обратный звонок</h2>
              </div>
              <div className="services__content">
                <form action="#" className="contact__form">
                  <label htmlFor="name">Введите имя</label>
                  <input type="text" id="name" />
                  <label htmlFor="email">Введите номер телефона</label>
                  <input type="email" id="email" />
                  <label htmlFor="message">Комментарии</label>
                  <textarea style={{height:120}} type="text" id="message" />
                  <button type="submit" id="contact__btn">
                  Отправить
                  </button>
                </form>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11984.761201300016!2d69.2284847!3d41.3264751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e0!3m2!1sru!2s!4v1706457384325!5m2!1sru!2s"
                  style={{border: 0, borderRadius: 20}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
