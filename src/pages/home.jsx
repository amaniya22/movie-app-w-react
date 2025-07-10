import React, { useEffect, useState } from "react";
import HeroSection from "../components/heroSection";
import Trending from "../components/trending";
import { movieTrends } from "../constants/movieData";
import PopularSection from "../components/popularSection";
import MovieDetailModal from "../components/movieDetailModal";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [genresList, setGenresList] = useState([]);
  const fetchMovieData = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setErrorMessage(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const fetchGenres = async () => {
    try {
      const endpointGenres = `${API_BASE_URL}/genre/movie/list?language=en`;

      const response = await fetch(endpointGenres, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch genres");
      }

      const data = await response.json();

      setGenresList(data.genres || []);
    } catch (error) {
      console.error("Error fetching genres:", error);
      setGenresList([]);
    }
  };

  useEffect(() => {
    fetchMovieData();
    fetchGenres()
  }, []);

  return (
    <div className="home-container pb-24">
      <div className="home-hero-section bg-cover bg-no-repeat bg-center">
        <HeroSection />
      </div>

      <Trending trendMovies={movieTrends} />

      <div className="popular-container px-20">
        <p className="title text-white mb-7">Popular</p>
        <div className="flex flex-wrap justify-between gap-6 mb-8">
          {isLoading ? (
            <div className="loading-spinner">Loading...</div>
          ) : errorMessage ? (
            <div className="error-message">{errorMessage}</div>
          ) : (
            <React.Fragment>
              {movieList.map((movie) => (
                <PopularSection
                  key={movie.id}
                  popularMovies={movie}
                  genresList={genresList}
                />
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
