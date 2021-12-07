import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import NoMoviesFound from "./components/NoMoviesFound";
import defaultMovieCards from "./defaultMovieCards";
import Card from "./components/Card";
import Cart from "./components/Cart";
import getData from "./getData";
import purchaseMovies from "./purchaseMovies";
import "./App.css";
import Loading from "./components/Loading";

const App = () => {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [data, setData] = useState(defaultMovieCards);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesInsideCart, setMoviesInsideCart] = useState([]);
  const [isBuyButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    userSearchInput && getData(userSearchInput, setIsLoading)
    .then(res => setData(res))
  }, [userSearchInput]);

  // ---------- handler functions -------------
  // add movieButton to parent component to check movieInside data with fetched data.
  // check also line 41 a new buttonDisable prop
  const addMovieButton = (card) => {  
    setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, card]);
  }

  const purchaseSuccess = (res) => {
    setMoviesInsideCart([]);
    setIsButtonClicked(false);
    alert("Successfully Purchased")
    console.log(res.config.data);
  }

  const buyMoviesButton = async () => {
    if(moviesInsideCart.length === 0 || isBuyButtonClicked) { return;}
    setIsButtonClicked(true);
    await purchaseMovies(moviesInsideCart).then(res => {
      res.data.success ? purchaseSuccess(res) : alert("Something went wrong. Please Try Again");
    })
  }

  return (
    <div className="App">
      <Header moviesInsideCart={moviesInsideCart} />
      <Input setUserSearchInput={setUserSearchInput} data={data} setData={setData}/>
      {
      (data.length === 0) ? <NoMoviesFound />
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
  );
}

export default App;