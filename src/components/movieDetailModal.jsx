import { Button, Modal } from "antd";
import React from "react";
import { siteImages } from "../assets/images";

const MovieDetailModal = ({
  isModalOpen,
  handleCancel,
  movie: {
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
  const matchedNames = genre_ids.map((id) => {
    const match = genresList.find((item) => item.id === id);
    return match ? match.name : "N/A";
  });

  // Filter out nulls (or you can replace them with "N/A" above)
  const filteredNames = matchedNames.filter((name) => name !== null);

  return (
    <React.Fragment>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        className="movie-modal"
        closeIcon={false}
        width={1200}
        footer={""}
        centered
      >
        <div className="movie-modal-content">
          <div className="flex justify-between items-start mb-7">
            <div>
              <p className="text-white movie-title mb-4">{title}</p>
              <p className="movie-meta text-d-gray-1">
                {release_date ? release_date.split("-")[0] : "N/A"}
                <span className="mx-1">•</span> {adult ? "Adult" : "PG-13"}
                <span className="mx-1">•</span> {original_language}
              </p>
            </div>
            <div className="flex gap-2.5">
              <div className="flex items-center movie-info-div px-4 py-2 rounded-md">
                <img
                  src={siteImages.Icons.StarIcon}
                  alt="star-rating"
                  className="mr-1.5 w-5"
                />
                <p className="movie-rating text-d-gray-1">
                  <span className="text-white font-semibold">
                    {vote_average ? vote_average.toFixed(1) : "N/A"}
                  </span>
                  /10
                </p>
              </div>
              <div className="flex items-center movie-info-div px-4 py-2 rounded-md">
                <img
                  src={siteImages.Icons.GraphIcon}
                  alt="icon"
                  className="mr-1.5 w-6"
                />
                <p className="movie-insights text-d-gray-1">{vote_count}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-7">
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : "/no-movie.png"
              }
              alt="squid-game"
              width={302}
              className="rounded-lg"
            />
            <img
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                  : "/no-movie.png"
              }
              alt="squid-game-trailer"
              width={772}
              className="rounded-lg"
            />
          </div>

          <div className="flex justify-between">
            <div className="grid gap-5">
              <div className="flex items-center">
                <p className="text-d-gray-1 movie-detail-label">Generes</p>
                <div className="flex gap-2.5">
                  {/* {genresList.map((item) => {
                    genres.includes(item.id) ? (
                      <span
                        key={item.id}
                        className="movie-genre movie-detail-value text-d-gray-1 py-1 px-4 rounded-md content-center"
                      >
                        {item.name}
                      </span>
                    ) : null
                  })} */}
                  {filteredNames.map((item, index) => (
                    <span
                      key={index}
                      className="movie-genre movie-detail-value text-d-gray-1 py-1 px-4 rounded-md content-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Overview</p>
                <p className="text-white movie-detail-value w-2/3">
                  {overview}
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Release date</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  {release_date ? release_date : "N/A"}
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Countries</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  United Stated <span className="mx-1">•</span> Canada{" "}
                  <span className="mx-1">•</span> UAE{" "}
                  <span className="mx-1">•</span> Hungary{" "}
                  <span className="mx-1">•</span> Italy{" "}
                  <span className="mx-1">•</span> New Zealand
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Status</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  {release_date ? "Released" : "Not Released"}
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Language</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  English <span className="mx-1">•</span> Korean{" "}
                  <span className="mx-1">•</span> Hindi{" "}
                  <span className="mx-1">•</span> Arabic{" "}
                  <span className="mx-1">•</span> German{" "}
                  <span className="mx-1">•</span> Spanish
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Budget</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  $21.4 million
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Revenue</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  $900 Million
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Tagline</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  45.6 Billion Won is Child's Play
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">
                  Production Companies
                </p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  Legendary Entertainment <span className="mx-1">•</span> Warner
                  Bros. Entertainment <span className="mx-1">•</span>
                  Villeneuve Films
                </p>
              </div>
            </div>
            <Button className="visit-homepg-btn rounded-md">
              Visit Homepage
              <img src={siteImages.Icons.ArrowIconBlack} alt="arrow-icon" />
            </Button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default MovieDetailModal;
