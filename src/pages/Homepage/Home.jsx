import React from "react";
import Brands from "../../components/Brands/Brands";
import Advantage from "../../components/Advantage/Advantage";
import OurTeam from "../../components/OurTeam/OurTeam";
import Info from "../../components/Info/Info";
import Banner from "./components/banner/Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner/>
      <Brands />
      <Advantage/>
      <OurTeam/>
      <Info/>
    </div>
  );
};

export default Home;
