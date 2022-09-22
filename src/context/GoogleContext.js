import React, { useState, useContext, createContext } from "react";
import axios from "axios";

const GoogleContext = createContext();
const baseURL = "https://google-search3.p.rapidapi.com/api/v1";

export const GoogleContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("anime");

  const getResults = async (type) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: baseURL+type,
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "37d6f51a7bmsh53632c1fdbbc19cp19cba4jsn1395d79c6356",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    };

   const res = await axios.request(options);

   setResults(res.data)
   console.log(res.data)

  //  if(type.includes("/news")){
  //   setResults(res.data.entries)
  // }

  setIsLoading(false);
  };

  return (
    <GoogleContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
      {children}
    </GoogleContext.Provider>
  )

};

export const useResultContext = () => useContext(GoogleContext);
