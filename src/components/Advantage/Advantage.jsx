import React from "react";
//IMAGES
import ContentImg1 from "../../assets/advantage/advantages_icn_1.svg";
import ContentImg2 from "../../assets/advantage/advantages_icn_2.svg";
import ContentImg3 from "../../assets/advantage/advantages_icn_3.svg";
import ContentImg4 from "../../assets/advantage/advantages_icn_4.svg";
import ContentImg5 from "../../assets/advantage/advantages_icn_5.svg";

import "../Advantage/Advantage.scss";

const Advantage = () => {
  const advantage = [
    {
      id: 1,
      title: (
        <>
          50 000 довольных <br /> клиентов по всей страна
        </>
      ),
      contentImg: ContentImg1,
    },
    {
      id: 2,
      title: (
        <>
          99% заказов приходит <br /> в назначенное время
        </>
      ),
      contentImg: ContentImg2,
    },
    {
      id: 3,
      title: (
        <>
          5 лет на рынке <br /> инструмента и техники
        </>
      ),
      contentImg: ContentImg3,
    },
    {
      id: 4,
      title: (
        <>
          Боле 5 000 позиций <br />
          товаров на складах
        </>
      ),
      contentImg: ContentImg4,
    },
    {
      id: 5,
      title: (
        <>
          Бесплатная доставка по городу <br /> Ташкент (при заказе от 3 млн.)
        </>
      ),
      contentImg: ContentImg5,
    },
  ];
  return (
    <>
      <section className="advantage">
        <div className="container">
          <div className="advantage_wrapper">
            <h2>Наши преимущества</h2>
            <div className="advantage_flex">
              {advantage.map((item, index) => (
                <div className="advantage_content" key={index}>
                  <img src={item.contentImg} alt="advantageImg" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantage;
