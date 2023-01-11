import React, { useState, createContext, useContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com";

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  //search, /images
  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      //   params: {
      //     query: "word cup",
      //     num: "10",
      //     sort: "relevance",
      //   },
      headers: {
        "X-RapidAPI-Key": "f12e68dde8msh7f65513efc51dc6p1ffff9jsn2464e507fe2e",
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });
    const data = await response.json();
    console.log(data);
    setResults(data);
    //   .then((res) => res.json())
    //   .then((res) => setResults(res));
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;

export const useResultContext = () => useContext(ResultContext);
