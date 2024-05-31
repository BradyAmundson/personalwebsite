import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Portfolio = () => {
  return (
    <div>
      <ParallaxProvider>
        <Parallax speed={-5}>
          <div className="slow" />
        </Parallax>
        <Parallax speed={5}>
          <div className="fast" />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default Portfolio;
