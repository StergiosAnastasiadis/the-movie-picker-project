import { createContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [userMovieSearch, setUserMovieSearch] = useState("");
  const [sortingButtonStatus, setSortingButtonStatus] = useState("Order By")
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesInsideCart, setMoviesInsideCart] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    setIsAuth(localStorage.getItem("Auth") === "true" ? true : false);
    setMoviesInsideCart(JSON.parse(localStorage.getItem("StoredMoviesInsideCart")));
  }, [])

  useEffect(() => {
    localStorage.setItem("StoredMoviesInsideCart", JSON.stringify(moviesInsideCart));
  }, [moviesInsideCart])

  return (
    <DataContext.Provider
      value={{
        moviesInsideCart,
        setMoviesInsideCart,
        userMovieSearch,
        setUserMovieSearch,
        movies,
        setMovies,
        setIsLoading,
        isLoading,
        isAuth,
        setIsAuth,
        userName,
        setUserName,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
        sortingButtonStatus,
        setSortingButtonStatus,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
