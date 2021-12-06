import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Card from "./components/Card";
import Cart from "./components/Cart";
import defaultMovieCards from "./defaultMovieCards";
import NoMoviesFound from "./components/NoMoviesFound";
import getData from "./getData";
import purchaseMovies from "./purchaseMovies";
import "./App.css";

const App = () => {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [data, setData] = useState(defaultMovieCards);
  const [moviesInsideCart, setMoviesInsideCart] = useState([]);

  useEffect(() => {
    userSearchInput && getData(userSearchInput).then(res => setData(res));   
  }, [userSearchInput]);

  useEffect(() => {
    //console.log(moviesInsideCart);
  }, [moviesInsideCart]);

  // ---------- handler functions -------------
  // add movieButton to parent component to check movieInside data with fetched data.
  // check also line 41 a new buttonDisable prop
  const addMovieButton = (card) => {  
    setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, card]);
  }

  const purchaseSuccess = () => {
    setMoviesInsideCart([]);
    console.log("successfully purchased");
  }

  const buyMoviesButton = () => {
    purchaseMovies(moviesInsideCart).then(res => {
      res.data.success ? purchaseSuccess() : console.log("Error");
    })
  }

  return (
    <div className="App">
      <Header moviesInsideCart={moviesInsideCart} />
      <Input setUserSearchInput={setUserSearchInput} />
      {(data.length === 0) 
      ? <NoMoviesFound />
      :<div className="movie-cards-container">
      {data.map((item) => (<Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} buttonDisable={moviesInsideCart.some(mic => mic.id === item.id)} addMovieButton={() => addMovieButton({...item})} />))}
      </div>
      }
      <div className="movie-cart">
        <h5 className="card-title">Buy Movies</h5>
        {moviesInsideCart && moviesInsideCart.map((item) => (<Cart key={item.id} id={item.id} title={item.title} setMoviesInsideCart={setMoviesInsideCart} />))}
        <button className="btn btn-outline-warning" id="buy-button" onClick={buyMoviesButton}>Buy Button</button>
      </div>
    </div>
  );
}

export default App;