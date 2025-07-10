import React, { useState } from "react";
import { siteImages } from "../assets/images";
import Pagination from "./pagination";
import MovieDetailModal from "./movieDetailModal";

const PopularSection = ({
  popularMovies: {
    title,
    release_date,
    adult,
    original_language,
    vote_average,
    vote_count,
    poster_path,
    backdrop_path,
    genre_ids = [],
    overview,
  },
  genresList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedMovie, setClickedMovie] = useState([]);

  const handleClick = () => {
    setIsModalOpen(true);
    setClickedMovie({
      title,
      release_date,
      adult,
      original_language,
      vote_average,
      vote_count,
      poster_path,
      backdrop_path,
      genre_ids,
      overview,
    });
  };

  return (
    <React.Fragment>
      <div
        className="movie-card px-5 py-6 rounded-3xl cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "/no-movie.png"
          }
          alt={`${title} poster`}
          className="mb-3 rounded-lg"
        />
        <p className="movie-title text-white mb-3">{title}</p>
        <div className="flex">
          <img
            src={siteImages.Icons.StarIcon}
            alt="star-rating"
            className="mr-1.5"
          />
          <div>
            <span className="rating-txt text-white">
              {vote_average ? vote_average.toFixed(1) : "N/A"}
            </span>
            <span className="mx-1">•</span>
            <span className="sub-txt">
              {release_date ? release_date.split("-")[0] : "N/A"}
            </span>
            <span className="mx-1">•</span>
            <span className="sub-txt">{original_language}</span>
          </div>
        </div>
      </div>

      <MovieDetailModal
        isModalOpen={isModalOpen}
        handleCancel={() => {
          setIsModalOpen(false);
        }}
        movie={clickedMovie}
        genresList={genresList}
      />
    </React.Fragment>
  );
};

export default PopularSection;
