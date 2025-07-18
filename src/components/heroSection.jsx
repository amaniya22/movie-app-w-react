import React from "react";
import { siteImages } from "../assets/images";

const HeroSection = () => {

  return (
    <div className="hero-section-container">
      <div className="flex flex-col justify-center items-center pt-[50px]">
        <img
          src={siteImages.LandingPgImgs.Logo}
          alt="logo"
          className="h-[46px]"
        />

        <img
          src={siteImages.LandingPgImgs.HeroImage}
          alt="hero-image"
          width={480}
        />

        <p className="m-0 hero-title w-1/2 text-center leading-[60px] mb-8">
          Find <span className="hero-title-color">Movies</span> You’ll Love
          Without the Hassle
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
