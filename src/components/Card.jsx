import React from "react";

const Card = (movie) => {

    var imgUrl = "https://image.tmdb.org/t/p/original/";

    return (
        <div>
            <div className="card" id="movie-cards">
                <button id="add-movie-button" className="btn btn-secondary btn-sm" >Add</button>
                <img src={imgUrl + movie.poster_path} alt="movie-poster" />
                <h1>{movie.title} </h1>
            </div>
        </div>
    )
}

export default Card;
