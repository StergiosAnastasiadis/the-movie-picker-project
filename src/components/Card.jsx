import React from "react";

const Card = (props) => {

    return (
        <div className="movie-cards">
            <div className="card" id="movie-cards">
                <a className="add-movie-button" href="#">Add</a>
                <img alt="movie-poster"></img>
                <h1>{props.title} </h1>
            </div>
        </div>
    )
}

export default Card;
