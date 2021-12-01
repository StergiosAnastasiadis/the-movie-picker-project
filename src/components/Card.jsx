import React from "react";
import moviesInCart from "../moviesInCart";

const Card = (movie) => {

    const imgUrl = "https://image.tmdb.org/t/p/original/";

    const addMovieButton = () => {
        // Add Movie to moviesInCart Array
        console.log(movie.id);
        console.log(movie.title);
        moviesInCart.push({ id: movie.id, title: movie.title });
        console.log(moviesInCart);
    }

    return (
        <div>
            <div className="card" id="movie-cards">
                <button id="add-movie-button" className="btn btn-secondary btn-sm" value={movie.id} onClick={addMovieButton}>Add</button>
                <img src={imgUrl + movie.poster_path} alt="movie-poster" />
                <h1>{movie.title} </h1>
            </div>
        </div>
    )
}

export default Card;
