import React, { useState, useEffect } from "react";
import Banner1 from "@/assets/Banner_1.png";
import Banner2 from "@/assets/Banner_2.png";
import Banner3 from "@/assets/Banner_3.png";
import Banner4 from "@/assets/Banner_4.png";
import BannerBg1 from "@/assets/Banner_bg_1.png";
import BannerBg2 from "@/assets/Banner_bg_2.png";
import BannerBg3 from "@/assets/Banner_bg_3.png";
import BannerBg4 from "@/assets/Banner_bg_4.png";
import "../styles/Banner.scss";

const banners = [
  {
    id: 1,
    backgroundImg: Banner1,
    backgroundImage: "linear-gradient(180deg, rgb(255, 165, 9), rgb(246, 108, 79) 66.175%)",
    title: "Пеноплекс Основа",
    description:
      "Пеноплэкс» — российская компания, производитель тепло- и гидроизоляционных, а также декоративно-отделочных материалов на основе полимеров, основной вид продукции — теплоизоляционные плиты из экструзионного пенополистирола", 
    descriptionMobil: "производитель тепло-и гидроизоляционных материалов.",
    contentImg: BannerBg1,
  },
  {
    id: 2,
    backgroundImg: Banner2,
    backgroundImage: "linear-gradient(180deg, rgb(151, 232, 181), rgb(92, 182, 127) 100%)",
    title: "Гипсакартон",
    description:
      "Cтроительный материал, представляющий собой лист, состоящий из двух слоёв строительной бумаги (картона) и сердечника из слоя затвердевшего гипсового теста с наполнителями.",
    descriptionMobil: "Cтроительный материал, представляющий собой лист состоящий из двух слоёв",
    contentImg: BannerBg2,
  },
  {
    id: 3,
    backgroundImg: Banner3,
    backgroundImage: "linear-gradient(180deg, rgb(255, 243, 1), rgb(255, 179, 3) 100%)",
    title: "Basalt wool тепло и тихо",
    description:
      "Базальтовое волокно представляет собой материал, изготовленный из чрезвычайно тонких волокон базальта, который состоит из минералов плагиоклаза, пироксена и оливина. Он похож на стекловолокно.",
    descriptionMobil: "Базальтовое волокно представляет собой материал, изготовленный из чрезвычайно тонких волокон",
    contentImg: BannerBg3,
  },
  {
    id: 4,
    backgroundImg: Banner4,
    backgroundImage: "linear-gradient(180deg, rgb(183, 152, 145), rgb(148, 113, 107) 100%)",
    title: "Финская Фанера",
    description:
      "многослойный строительный материал, изготавливаемый путём склеивания специально подготовленного шпона. Для повышения прочности фанеры слои шпона накладываются так.",
    descriptionMobil: "Этот материал изготавливается путём склеивания специально подготовленного шпона.",
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
    <>
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
        }} >
        <div className="banner_wrapper">
          <div className="banner_content">
            <h2>{currentBanner.title}</h2>
            <p>{currentBanner.description}</p>
            <div className="banner_buttons">
              {banners.map((banner, index) => (
                <button
                  key={banner.id}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => setCurrentIndex(index)}></button>
              ))}
            </div>
          </div>
          <img className="banner_content_img" src={currentBanner.backgroundImg} alt={currentBanner.title} />
        </div>
      </div>
    </div>
    
    <div className="banner-top-mobile">
      <div
        style={{
          maxWidth: "1110px",
          margin: "0 auto",
          height: "auto",
          padding: "13px 10px",
          display: "flex",
          backgroundImage: currentBanner.backgroundImage, // To'g'irlandi
          borderRadius: "20px",
          transition: "background-image 0.5s ease",
        }}>
        <div className="banner_wrapper">
          <div className="banner_content_mobile">
            <h2>{currentBanner.title}</h2>
            <p>{currentBanner.descriptionMobil}</p>
            <div className="banner_buttons">
              {banners.map((banner, index) => (
                <button
                  key={banner.id}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => setCurrentIndex(index)}>
                </button>
              ))}
            </div>
          </div>
          <img className="banner_mobile_img" src={currentBanner.backgroundImg} alt={currentBanner.title} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;
