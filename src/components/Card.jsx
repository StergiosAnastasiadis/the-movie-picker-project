import React from "react";

const Card = ({ id, title, poster_path, vote_average, buttonDisable, addMovieButton }) => {

    const imgUrl = "https://image.tmdb.org/t/p/original/";
    
    return (
        <div>
            <div className="card" id="movie-cards">
                <button id="add-movie-button" className="btn btn-secondary btn-sm" onClick={addMovieButton} value={id} disabled={buttonDisable}>Add</button>
                <img src={poster_path === null ? "" :imgUrl + poster_path} alt="movie-poster" />
                {<h1>{title} </h1>}
            </div>
        </div>
    )
}

export default Card;
