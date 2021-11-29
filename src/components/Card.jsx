import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <img alt="movie-poster"></img>
        </div>
    )
}

export default Card;