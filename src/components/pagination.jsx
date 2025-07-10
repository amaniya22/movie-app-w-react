import React from "react";
import { siteImages } from "../assets/images";

const Pagination = ({ currentPage, pageLength }) => {
  return (
    <div className="flex justify-between items-center pagination-container">
      <div className="pagination-arrow-btn rounded-lg p-5 cursor-pointer">
        <img src={siteImages.Icons.ArrowIconPurple} alt="arrow-purple" className="w-5" />
      </div>
      <div className="pagination-text">
        <span className="text-white">{currentPage}</span> / <span>{pageLength}</span>
      </div>
      <div className="pagination-arrow-btn rounded-lg p-5 cursor-pointer">
        <img src={siteImages.Icons.ArrowIconPurple} alt="arrow-purple" className="w-5 rotate-180" />
      </div>
    </div>
  );
};

export default Pagination;
