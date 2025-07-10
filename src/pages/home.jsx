import React from "react";
import HeroSection from "../components/heroSection";
import Trending from "../components/trending";
import { movieTrends, popularMovies } from "../constants/movieData";
import PopularSection from "../components/popularSection";

const Home = () => {
  return (
    <div className="home-container pb-24">
      <div className="home-hero-section bg-cover bg-no-repeat bg-center">
        <HeroSection />
      </div>

      <Trending trendMovies={movieTrends} />

      <PopularSection popularMovies={popularMovies} />
    </div>
  );
};

export default Home;
