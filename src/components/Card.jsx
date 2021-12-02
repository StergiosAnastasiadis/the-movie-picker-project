import React, { useState } from "react";

const Card = ({ id, title, poster_path, setMoviesInsideCart }) => {

    const imgUrl = "https://image.tmdb.org/t/p/original/";

    const addMovieButton = () => {

        const obj = { id: id, title: title, poster_path: poster_path };
        console.log(obj);

        setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, obj]);
    }

    return (
        <div>
            <div className="card" id="movie-cards">
                <button id="add-movie-button" className="btn btn-secondary btn-sm" onClick={addMovieButton}>Add</button>
                <img src={imgUrl + poster_path} alt="movie-poster" />
                {<h1>{title} </h1>}
            </div>
        </div>
    )
}

export default Card;
