import { createContext, useState, useEffect } from "react";
import initialFetch from "../api/initialFetch";
import getData from "../api/getData";
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

  const notifySuccess = () => toast.success("Successfully Purchased");

  useEffect(() => {
    initialFetch().then((res) => (typeof res !== "undefined") ? setData(res.data.results) : toast.error("Could not get initial data"));
  }, []);

  useEffect(() => {
    userSearchInput &&
      getData(userSearchInput, setIsLoading).then((res) => setData(res));
  }, [userSearchInput]);

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
    setIsButtonClicked(true);
    await purchaseMovies(moviesInsideCart).then((res) => {
      (typeof res !== "undefined") ? purchaseSuccess(res) : toast.error("Failed to Purchase Movies, Please Try Again."); setIsButtonClicked(false);
    });
  };

  const lowestToHighest = () => {
    let newArray = data.sort(
      (a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average)
    );
    setData([...newArray]);
  };

  const highestToLowest = () => {
    let newArray = data.sort(
      (a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average)
    );
    setData([...newArray]);
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
        lowestToHighest,
        highestToLowest,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
