import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/imagesearch") {
        getResults(`/search?query=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}?query=${searchTerm}&num=50`);
      }
    }
    // getResults("/search?query=javascript&num=50");
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.items?.map(({ link, title, snippet }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-gray-500">{snippet}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/imagesearch":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map(
            ({ title, originalImageUrl, contextLink }, index) => (
              <a
                className="sm:p-3 p-5"
                href={contextLink}
                key={index}
                target="_blank"
                rel="nofeferrer"
              >
                <img src={originalImageUrl} alt={title} loading="lazy" />
                <p className="w-30 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );
    default:
      return "Error";
  }

  return <div>Results</div>;
};

export default Results;
