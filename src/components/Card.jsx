import React from "react";

const Card = (props) => {

    return (
        <div className="movie-cards">
            {/* check the movie card height */}
            <div className="card" id="movie-cards">
                <a className="add-movie-button" href="#">Add</a>
                {/* <img alt="movie-poster"></img> */}
                {/* Hint - img tag is self-closing Tag*/}
                <img src={props.imgSrc} alt="movie-poster" />
                <h1>{props.title} </h1>
            </div>
        </div>
    )
}

export default Card;
