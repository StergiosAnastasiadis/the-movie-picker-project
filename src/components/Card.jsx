import React from "react";

const Card = (props) => {

    return (
        <div>
            {/* check the movie card height | DONE */}
            <div className="card" id="movie-cards">
                <a className="add-movie-button" href="#">Add</a>
                {/* <img alt="movie-poster"></img> | DONE*/}
                {/* Hint - img tag is self-closing Tag | DONE*/}
                <img src={props.imgSrc} alt="movie-poster" />
                <h1>{props.title} </h1>
            </div>
        </div>
    )
}

export default Card;
