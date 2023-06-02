import React from "react";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import General from "../../Components/General";
import Facilities from "../../Components/Facilities";
import Reviews from "../../Components/Reviews";
import Gallery from "../../Components/Gallery";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <General/>
      <Facilities/>
      <Reviews/>
      <Gallery/>
    </>
  );
};

export default Home;
