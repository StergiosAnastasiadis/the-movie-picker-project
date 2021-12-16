import { createContext, useState, useEffect } from "react";
import purchaseMovies from "../api/purchaseMovies";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesInsideCart, setMoviesInsideCart] = useState([]);
  const [isBuyButtonClicked, setIsButtonClicked] = useState(false);

  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");

  const notifySuccess = () => toast.success(`Congratulations ${userName} you purchased ${moviesInsideCart.length} Movie(s)`);

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    setIsAuth(localStorage.getItem("Auth") === "true" ? true : false)
  }, [])

  const handleUserSearchInput = (event) => {
    setUserSearchInput(event.target.value);
  };

  const addMovieButton = (card) => {
    setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, card]);
  };

  const purchaseSuccess = (res) => {
    setMoviesInsideCart([]);
    setIsButtonClicked(false);
    notifySuccess();
    console.log(res.config.data);
  };

  const buyMoviesButton = async () => {
    if (moviesInsideCart.length === 0 || isBuyButtonClicked) {
      return;
    }

    if (!isAuth) { return toast.warning("You have to be logged in to purchase movies") }

    setIsButtonClicked(true);
    await purchaseMovies(moviesInsideCart).then((res) => {
      (typeof res !== "undefined") ? purchaseSuccess(res) : toast.error("Failed to Purchase Movies, Please Try Again."); setIsButtonClicked(false);
    });
  };

  return (
    <DataContext.Provider
      value={{
        handleUserSearchInput,
        moviesInsideCart,
        setMoviesInsideCart,
        userSearchInput,
        setUserSearchInput,
        data,
        setData,
        addMovieButton,
        buyMoviesButton,
        purchaseSuccess,
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
