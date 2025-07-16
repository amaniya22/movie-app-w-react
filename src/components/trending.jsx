import React from "react";

const Trending = ({ trendMovies, number }) => {
  return (
    <div key={trendMovies.movie_id} className="flex items-center trend-card">
      <p className="content-number">{number}</p>
      <img
        src={trendMovies.poster_url}
        alt={`movie-number-${number}`}
        className="h-36 min-w-fit -ml-4.5 movie-img rounded-md"
        width={107}
      />
    </div>
  );
};

export default Trending;
