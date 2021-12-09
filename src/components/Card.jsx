import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Card = ({ buttonStatus, item, addMovieButton }) => {

    const { setMoviesInsideCart } = useContext(DataContext);

    const imgUrl = "https://image.tmdb.org/t/p/original/";

     const deleteMovie = () => {
         setMoviesInsideCart((moviesInsideCart) => {
             const newArray = moviesInsideCart.filter(movie => !(movie.id === item.id));
             return newArray
         })
     }
    
    return (
        <div>
            <div className="card" id="movie-cards">
                <button id="add-movie-button" className="btn btn-secondary btn-sm" onClick={buttonStatus ? deleteMovie : addMovieButton} value={item.id} > {buttonStatus ? "Remove" : "Add"}</button>
                <img src={item.poster_path === null ? "" :imgUrl + item.poster_path} alt="movie-poster" />
                {<h1>{item.title} </h1>}
            </div>
        </div>
    )
}

export default Card;
