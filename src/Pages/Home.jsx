import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Context/latestCollection";


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
    </div>
  );
};

export default Home;
