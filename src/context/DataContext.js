import { createContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesInsideCart, setMoviesInsideCart] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    setIsAuth(localStorage.getItem("Auth") === "true" ? true : false)
  }, [])

  const addMovieButton = (card) => {
    setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, card]);
  };

  return (
    <DataContext.Provider
      value={{
        moviesInsideCart,
        setMoviesInsideCart,
        userSearchInput,
        setUserSearchInput,
        movies,
        setMovies,
        addMovieButton,
        setIsLoading,
        isLoading,
        isAuth,
        setIsAuth,
        userName,
        setUserName
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
