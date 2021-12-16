import { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import Loading from "./Loading";
import Card from "./Card";
import Cart from "./Cart";
import purchaseMovies from "../../api/purchaseMovies";
import { toast } from "react-toastify";

const NestedComponents = () => {

  const { userSearchInput, moviesInsideCart, setMoviesInsideCart, data, isLoading, addMovieButton, isAuth, userName } = useContext(DataContext);

  const [isBuyButtonClicked, setIsButtonClicked] = useState(false);


  const notifySuccess = () => toast.success(`Congratulations ${userName} you purchased ${moviesInsideCart.length} Movie(s)`);

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

  const purchaseSuccess = (res) => {
    setMoviesInsideCart([]);
    setIsButtonClicked(false);
    notifySuccess();
    console.log(res.config.data);
  };


  return (
    <div className="flex-container">
      {
        (userSearchInput && data.length === 0) ? <h1>No Movies Found</h1>
          : (isLoading) ? <Loading />
            : <div className="movie-cards-container">
              {data.map((item) => (<Card item={item} key={item.id} buttonStatus={moviesInsideCart.some(mic => mic.id === item.id)} addMovieButton={() => addMovieButton({ ...item })} />))}
            </div>
      }
      <div className="movie-cart">
        <h5 className="card-title">Buy Movies</h5>
        {moviesInsideCart && moviesInsideCart.map((item) => (<Cart item={item} key={item.id} />))}
        <button className="btn btn-outline-warning buy-button" onClick={buyMoviesButton}>Purchase</button>
      </div>
    </div>
  )
}

export default NestedComponents;