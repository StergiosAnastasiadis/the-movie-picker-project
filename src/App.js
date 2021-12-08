import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Loading from "./components/Loading";
import NoMoviesFound from "./components/NoMoviesFound";
import initialFetch from "./initialFetch";
import Card from "./components/Card";
import Cart from "./components/Cart";
import getData from "./getData";
import purchaseMovies from "./purchaseMovies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesInsideCart, setMoviesInsideCart] = useState([]);
  const [isBuyButtonClicked, setIsButtonClicked] = useState(false);

  const notifySuccess = () => toast.success("Successfully Purchased");
  const notifyError = () => toast.error("Oops something went wrong.\nPlease try again");

  useEffect(() => {
    initialFetch()
    .then(res => setData(res))
   }, []);

  useEffect(() => {
    userSearchInput && getData(userSearchInput, setIsLoading)
    .then(res => setData(res))
  }, [userSearchInput]);

  const addMovieButton = (card) => {  
    setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, card]);
  }

  const purchaseSuccess = (res) => {
    setMoviesInsideCart([]);
    setIsButtonClicked(false);
    notifySuccess();
    console.log(res.config.data);
  }

  const buyMoviesButton = async () => {
    if(moviesInsideCart.length === 0 || isBuyButtonClicked) { return;}
    setIsButtonClicked(true);
    await purchaseMovies(moviesInsideCart).then(res => {
      res.data.success ? purchaseSuccess(res) : notifyError();
    })
  }

  return (
    <div className="App">
      <Header moviesInsideCart={moviesInsideCart} />
      <Input setUserSearchInput={setUserSearchInput} data={data} setData={setData}/>
      <ToastContainer />
      <div className="flex-container">
      {
      (userSearchInput && data.length === 0) ? <NoMoviesFound />
      :(isLoading) ? <Loading />
      :<div className="movie-cards-container">
      {data.map((item) => (<Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} vote_average={item.vote_average} buttonDisable={moviesInsideCart.some(mic => mic.id === item.id)} addMovieButton={() => addMovieButton({...item})} />))}
      </div>
      }
      <div className="movie-cart">
        <h5 className="card-title">Buy Movies</h5>
        {moviesInsideCart && moviesInsideCart.map((item) => (<Cart key={item.id} id={item.id} title={item.title} setMoviesInsideCart={setMoviesInsideCart} />))}
        <button className="btn btn-outline-warning" id="buy-button" onClick={buyMoviesButton}>Purchase</button>
      </div>
      </div>
    </div>
  );
}

export default App;