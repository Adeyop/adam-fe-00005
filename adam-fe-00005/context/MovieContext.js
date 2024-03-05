
import { createContext, useState, useContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const value = {
    movies,
    setMovies,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => useContext(MovieContext);
