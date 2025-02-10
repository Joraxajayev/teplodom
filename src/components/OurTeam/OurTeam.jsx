import React, { useRef } from "react";
import person_1 from "../../assets/ourTeam/team-person_1.png";
import person_2 from "../../assets/ourTeam/team-person_2.png";
import person_3 from "../../assets/ourTeam/team-person_3.png";
import person_4 from "../../assets/ourTeam/team-person_4.png";
import left from "../../assets/brands/left_icn.svg";
import right from "../../assets/brands/right_icn.svg";

import "../OurTeam/OurTeam.scss";

const OurTeam = () => {
  const brands = [
    {
      id: 1,
      personImg: person_1,
      fullName: "Ӯткуров Сардор",
      position: "Директор фирмы",
    },
    {
      id: 2,
      personImg: person_2,
      fullName: "Рахматуллаев Хаб",
      position: "Менеджерпо продажам",
    },
    {
      id: 1,
      personImg: person_3,
      fullName: "Усмонов Нодир",
      position: "Менеджерпо продажам",
    },
    {
      id: 1,
      personImg: person_4,
      fullName: "Йолдошев Донийор",
      position: "Менеджерпо продажам",
    },
  ];
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 255 + 30;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="ourTeam">
      <div className="container">
        <div className="ourTeam_wrapper">
          <div className="ourTeam_content">
            <h2>Наши команда</h2>
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
          <div className="ourTeam_card" ref={scrollContainerRef}>
            {brands.map((team, index) => (
              <div className="ourTeam_card_content" key={index}>
                <img src={team.personImg} alt="ourTeam" />
                <h4>{team.fullName}</h4>
                <p>{team.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
