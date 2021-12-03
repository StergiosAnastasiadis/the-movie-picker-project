import React, { useState } from "react";

const Card = ({ id, title, poster_path, setMoviesInsideCart }) => {

    const imgUrl = "https://image.tmdb.org/t/p/original/";

    const [disabledButton, setDisabledButton] = useState(false);

    const addMovieButton = () => {

        const obj = { id: id, title: title, poster_path: poster_path };

        setDisabledButton(true);

        setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, obj]);

    }

    return (
        <div>
            <div className="card" id="movie-cards">
                <button id="add-movie-button" className="btn btn-secondary btn-sm" onClick={addMovieButton} value={id} disabled={disabledButton}>Add</button>
                <img src={imgUrl + poster_path} alt="movie-poster" />
                {<h1>{title} </h1>}
            </div>
        </div>
    )
}

export default Card;
