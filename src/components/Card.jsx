import React from "react";
import { imgUrl } from "../urlStrings";

const Card = ({ id, title, poster_path, buttonStatus, addMovieButton, setMoviesInsideCart }) => {

    const deleteMovie = () => {
        setMoviesInsideCart((moviesInsideCart) => {
            const newArray = moviesInsideCart.filter(movie => !(movie.id === id));
            return newArray
        })
    }
    
    return (
        <div>
            <div className="card" id="movie-cards">
                <button id="add-movie-button" className="btn btn-secondary btn-sm" onClick={buttonStatus ? deleteMovie : addMovieButton} value={id} > {buttonStatus ? "Remove" : "Add"}</button>
                <img src={poster_path === null ? "" :imgUrl + poster_path} alt="movie-poster" />
                {<h1>{title} </h1>}
            </div>
        </div>
    )
}

export default Card;
