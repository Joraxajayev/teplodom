import React, { useRef } from "react";
import kbt from "../../assets/brands/kbt.png";
import yato from "../../assets/brands/yato.png";
import viko from "../../assets/brands/viko.png";
import uzkabel from "../../assets/brands/uzkabel.png";
import total from "../../assets/brands/total.png";
import tytan from "../../assets/brands/tytan.png";
import akfix from "../../assets/brands/akfix.png";
import megamix from "../../assets/brands/megamix.png";
import left from "../../assets/brands/left_icn.svg";
import right from "../../assets/brands/right_icn.svg";

import "../Brands/Brands.scss";

const Brands = () => {
  const brands = [kbt, yato, viko, uzkabel, total, tytan, akfix, megamix];
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 193 + 36;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="brands">
      <div className="container">
        <div className="brands_wrapper">
          <div className="brands_content">
            <h2>Бренды</h2>
            <div className="control_btns">
              <button
                className="control_btns_left"
                onClick={() => scroll("left")}>
                <img src={left} alt="left_control" />
              </button>
              <button
                className="control_btns_right"
                onClick={() => scroll("right")}>
                <img src={right} alt="right_control" />
              </button>
            </div>
          </div>
          <div className="brands_card" ref={scrollContainerRef}>
            {brands.map((brand, index) => (
              <div className="brands_card_content" key={index}>
                <img src={brand} alt="brands" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
