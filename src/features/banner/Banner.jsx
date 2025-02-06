import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/Banner_1.png";
import Banner2 from "../../assets/Banner_2.png";
import Banner3 from "../../assets/Banner_3.png";
import Banner4 from "../../assets/Banner_4.png";
import BannerBg1 from "../../assets/Banner_bg_1.png";
import BannerBg2 from "../../assets/Banner_bg_2.png";
import BannerBg3 from "../../assets/Banner_bg_3.png";
import BannerBg4 from "../../assets/Banner_bg_4.png";
import "./Banner.css";

const banners = [
  {
    id: 1,
    backgroundImg: Banner1,
    title: "Пеноплекс Основа",
    description:
      "Пеноплэкс» — российская компания, производитель тепло- и гидроизоляционных, а также декоративно-отделочных материалов на основе полимеров, основной вид продукции — теплоизоляционные плиты из экструзионного пенополистирола",
    contentImg: BannerBg1,
  },
  {
    id: 2,
    backgroundImg: Banner2,
    title: "Гипсакартон",
    description:
      "Cтроительный материал, представляющий собой лист, состоящий из двух слоёв строительной бумаги (картона) и сердечника из слоя затвердевшего гипсового теста с наполнителями.",
    contentImg: BannerBg2,
  },
  {
    id: 3,
    backgroundImg: Banner3,
    title: "Basalt wool тепло и тихо",
    description:
      "Базальтовое волокно представляет собой материал, изготовленный из чрезвычайно тонких волокон базальта, который состоит из минералов плагиоклаза, пироксена и оливина. Он похож на стекловолокно.",
    contentImg: BannerBg3,
  },
  {
    id: 4,
    backgroundImg: Banner4,
    title: "Финская Фанера",
    description:
      "многослойный строительный материал, изготавливаемый путём склеивания специально подготовленного шпона. Для повышения прочности фанеры слои шпона накладываются так.",
    contentImg: BannerBg4,
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <div className="bannerTop">
      <div
        style={{
          maxWidth: "1110px",
          margin: "0 auto",
          height: "420px",
          padding: "10px 15px",
          display: "flex",
          backgroundImage: `url(${currentBanner.contentImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "20px",
          transition: "background-image 0.5s ease",
        }}
      >
        <div className="banner_wrapper">
          <div className="banner_content">
            <h2>{currentBanner.title}</h2>
            <p>{currentBanner.description}</p>
            <div className="banner_buttons">
              {banners.map((banner, index) => (
                <button
                  key={banner.id}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => setCurrentIndex(index)}
                >
                  
                </button>
              ))}
            </div>
          </div>
          <img src={currentBanner.backgroundImg} alt={currentBanner.title} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
