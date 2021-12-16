import { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import Loading from "./Loading";
import Card from "./Card";
import Cart from "./Cart";
import purchaseMovies from "../../api/purchaseMovies";
import { toast } from "react-toastify";

const NestedComponents = () => {

  const { userMovieSearch, moviesInsideCart, setMoviesInsideCart, movies, isLoading, isAuth, userName } = useContext(DataContext);

  const [isBuyButtonClicked, setIsButtonClicked] = useState(false);

  const notifySuccess = () => toast.success(`Congratulations ${userName} you purchased ${moviesInsideCart.length} Movie(s)`);

  const purchaseMoviesInsideCart = async () => {
    if (moviesInsideCart.length === 0 || isBuyButtonClicked) { return; }
    if (!isAuth) { return toast.warning("You have to be logged in to purchase movies") }
    setIsButtonClicked(true);
    purchaseMovies(moviesInsideCart)
      .then(res => purchaseSuccess(res))
      .catch(err => { toast.error("Failed to Purchase Movies, Please Try Again."); setIsButtonClicked(false); console.log(err) })
  }

  const purchaseSuccess = (res) => {
    setMoviesInsideCart([]);
    setIsButtonClicked(false);
    notifySuccess();
    console.log(res.config.data);
  };

  const addMovieButton = (card) => {
    setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, card]);
  };

  return (
    <div className="flex-container">
      {
        (userMovieSearch && movies.length === 0) ? <h1>No Movies Found</h1>
          : (isLoading) ? <Loading />
            : <div className="movie-cards-container">
              {movies.map((item) => (<Card item={item} key={item.id} buttonStatus={moviesInsideCart.some(mic => mic.id === item.id)} addMovieButton={() => addMovieButton({ ...item })} />))}
            </div>
      }
      <div className="movie-cart">
        <h5 className="card-title">Buy Movies</h5>
        {moviesInsideCart && moviesInsideCart.map((item) => (<Cart item={item} key={item.id} />))}
        <button className="btn btn-outline-warning buy-button" onClick={purchaseMoviesInsideCart}>Purchase</button>
      </div>
    </div>
  )
}

export default NestedComponents;