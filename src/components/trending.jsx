import React from "react";

const Trending = ({ trendMovies }) => {
  return (
    <div className="trending-container px-20">
      <p className="title text-white">Trending</p>

      <div className="trend-content mb-14 gap-12">
        {trendMovies.map((movie, index) => {
          return (
            <div key={index} className="flex items-center">
              <p className="content-number">{movie.id}</p>
              <img
                src={movie.imageUrl}
                alt={`movie-number-${index}`}
                className={`h-36 relative ${
                  movie.id == 1 ? "-inset-x-0.5" : "-inset-x-4.5"
                }`}
                width={107}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
