import { Button, Modal } from "antd";
import React from "react";
import { siteImages } from "../assets/images";

const MovieDetailModal = ({ isModalOpen, handleCancel }) => {
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
              <p className="text-white movie-title mb-4">Squid Game 2</p>
              <p className="movie-meta text-d-gray-1">2024 • PG-13 • 2h 46m</p>
            </div>
            <div className="flex gap-2.5">
              <div className="flex items-center movie-info-div px-4 py-2 rounded-md">
                <img
                  src={siteImages.Icons.StarIcon}
                  alt="star-rating"
                  className="mr-1.5 w-5"
                />
                <p className="movie-rating text-d-gray-1">
                  <span className="text-white font-semibold">8.9</span>/10
                  (200K)
                </p>
              </div>
              <div className="flex items-center movie-info-div px-4 py-2 rounded-md">
                <img
                  src={siteImages.Icons.GraphIcon}
                  alt="icon"
                  className="mr-1.5 w-6"
                />
                <p className="movie-insights text-d-gray-1">1</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-7">
            <img
              src={siteImages.MoviesTrends.SquidGame}
              alt="squid-game"
              width={302}
            />
            <img
              src={siteImages.MoviesTrends.SquidGameTrailer}
              alt="squid-game-trailer"
              width={772}
            />
          </div>

          <div className="flex justify-between">
            <div className="grid gap-5">
              <div className="flex items-center">
                <p className="text-d-gray-1 movie-detail-label">Generes</p>
                <div className="flex gap-2.5">
                  <span className="movie-genre movie-detail-value text-d-gray-1 py-1 px-4 rounded-md content-center">
                    Adventure
                  </span>
                  <span className="movie-genre movie-detail-value text-d-gray-1 py-1 px-4 rounded-md content-center">
                    Action
                  </span>
                  <span className="movie-genre movie-detail-value text-d-gray-1 py-1 px-4 rounded-md content-center">
                    Drama
                  </span>
                </div>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Overview</p>
                <p className="text-white movie-detail-value w-2/3">
                  Hundreds of cash-strapped players accept a strange invitation
                  to compete in children's games. Inside, a tempting prize
                  awaits with deadly high stakes: a survival game that has a
                  whopping 45.6 billion-won prize at stake.
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Release date</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  December 26, 2024 (Worldwide)
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Countries</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  United Stated • Canada • UAE • Hungary • Italy • New Zealand
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Status</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  Released
                </p>
              </div>

              <div className="flex">
                <p className="text-d-gray-1 movie-detail-label">Language</p>
                <p className="text-white movie-detail-value text-l-purple-1 w-2/3">
                  English • Korean • Hindi • Arabic • German • Spanish
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
                  Legendary Entertainment • Warner Bros. Entertainment •
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
