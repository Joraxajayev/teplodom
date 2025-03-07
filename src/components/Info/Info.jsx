import React from "react";
import InfoBg from "../../assets/info/info-bg.png";
import "../Info/Info.scss";

const Info = () => {
  return (
    <>
      <section className="info">
        <div className="container">
          <div className="info_wrapper">
            <h2>Интернет магазин Теплодом</h2>
            <div className="info_content">
              <div className="info_content_desc">
                Компания <strong>Teplodom</strong> является лидером строительных
                материалов на локальном рынке и предлагает широкий ассортимент
                строительных, отделочных материалов и товаров для дома всем
                клиентам Узбекистана. <br />
                <br />{" "}
                <div>
                  В каталоге на сайте Teplodom представлена продукция самых
                  известных брендов от крупнейших мировых производителей, а
                  также популярные отечественные торговые марки. Благодаря
                  удобной навигации, легко найти необходимый товар и отложить
                  его в корзину для оформления онлайн заказа. <br />
                  <br />
                  Высокое качество, экспертные знания, качественные ресурсы и
                  улучшение производства с каждым днем является обязательным
                  требованием для нашего бренда!
                </div>
              </div>
              <img src={InfoBg} alt="bg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
