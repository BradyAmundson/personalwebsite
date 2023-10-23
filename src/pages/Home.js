import React from "react";
import WelcomeBanner from "../components/welcomeBanner";
import { ParallaxProvider } from "react-scroll-parallax";
import "./styles/Home.css"

const Home = () => {
  return (
    <ParallaxProvider>
      <WelcomeBanner />
      <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
