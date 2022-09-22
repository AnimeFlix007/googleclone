import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../context/GoogleContext";
import Loading from "./Loading";

const Results = () => {
  const { getResults, results, searchTerm, isLoading } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
        getResults(`${location.pathname}/q=${searchTerm}&num=60`);
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className=" flex flex-wrap mx-12 xl:justify-between items-start space-y-6 sm:px-56 mt-10 xl:flex-row sm:flex-col">
          {results?.results?.map(({ link, title }, index) => {
            return (
              <div key={index} className=" xl:w-2/5 w-full text-left">
                <p className="text-sm">{link.length > 30 ? link.substring(0,30) : link}</p>
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  cursor-pointer">
                  {title.length > 30 ? title.substring(0,30)+"...." : title}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      );

    case "/image":
      return (
        <div className=" flex flex-wrap justify-center mt-10 items-center space-y-6 sm:px-56">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => {
            return (
                <a className=" sm:p-3 p-5" key={index} href={href} target="_blank" rel="noreferrer">
                  <img src={image?.src} alt={title} loading="lazy" />
                  <p className=" w-36 break-words text-sm mt-2 ">{title}</p>
                </a>
            );
          })}
        </div>
      );

    case "/news":
      return (
        <div className="sm:px-56 flex flex-wrap mt-10 px-10 my-0  justify-between items-center space-y-6">
          {console.log(results)}
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="md:w-2/5 w-full ">
              <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                <p className="text-lg dark:text-blue-300 text-blue-700">{title.length > 30 ? title.substring(0,30)+"...." : title}</p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
              </div>
            </div>
          ))}
        </div>
      );

      case '/video':
      return (
        <div className="flex flex-wrap justify-center  items-center ">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
              {video?.additional_links?.[0].href && <ReactPlayer url={video.additional_links?.[0].href} controls width="100%" height="180px" />}
            </div>
          ))}
        </div>
      );

    default:
      return "ERROR";
  }
};

export default Results;
