import React, { useState } from "react";
import { siteImages } from "../assets/images";
import Pagination from "./pagination";
import MovieDetailModal from "./movieDetailModal";

const PopularSection = ({ popularMovies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [clickedMovie, setClickedMovie] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="popular-container px-20">
      <p className="title text-white mb-7">Popular</p>

      <React.Fragment>
        <div className="popular-content gap-6 mb-8">
          {popularMovies.map((movie, index) => {
            return (
              <div
                className="movie-card px-5 py-6 rounded-3xl cursor-pointer"
                key={index}
                onClick={showModal}
              >
                <img src={movie.imageUrl} alt={movie.name} className="mb-3" />
                <p className="movie-title text-white mb-3">{movie.name}</p>
                <div className="flex">
                  <img
                    src={siteImages.Icons.StarIcon}
                    alt="star-rating"
                    className="mr-1.5"
                  />
                  <p>
                    <span className="rating-txt text-white">
                      {movie.rating}
                    </span>{" "}
                    • <span className="sub-txt">{movie.category}</span> •{" "}
                    <span className="sub-txt">{movie.type}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Pagination currentPage={1} pageLength={5} />
      </React.Fragment>

      <MovieDetailModal
        isModalOpen={isModalOpen}
        handleCancel={() => {
          setIsModalOpen(false);
        }}
        // clickedMovieData={clickedMovie} // Assuming you want to show the first movie's details in the modal
      />
    </div>
  );
};

export default PopularSection;
