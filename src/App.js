import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Cart from "./components/Cart";
import Card from "./components/Card";
import getData from "./getData";
import defaultMovieCards from "./defaultMovieCards";
import "./App.css";

function App() {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [data, setData] = useState(defaultMovieCards);
  const [moviesInsideCart, setMoviesInsideCart] = useState([]);

  useEffect(() => {
    userSearchInput && getData(userSearchInput).then(res => setData(res));
  }, [userSearchInput]);

  useEffect(() => {
    //console.log(moviesInsideCart);
  }, [moviesInsideCart]);

  return (
    <div className="App">
      <Header moviesInsideCart={moviesInsideCart} />
      <Input setUserSearchInput={setUserSearchInput} />
      <div className="add_your_flex_styling_check_wrap">
        {data.map((item) => (<Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} setMoviesInsideCart={setMoviesInsideCart} />))}
      </div>
      <div className="movie-cart">
        <h5 className="card-title">Buy Movies</h5>
        {moviesInsideCart && moviesInsideCart.map((item) => (<Cart key={item.id} id={item.id} title={item.title} setMoviesInsideCart={setMoviesInsideCart} />))}
        <button className="btn btn-outline-warning" id="buy-button">Buy Button</button>
      </div>

    </div>
  );
}

export default App;
