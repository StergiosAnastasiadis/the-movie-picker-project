import React, { useState } from "react";
import moviesInCart from "../moviesInCart";

const Card = (item, { moviesInsideCart, setMoviesInsideCart }) => {

    const imgUrl = "https://image.tmdb.org/t/p/original/";

    const addMovieButton = () => {
        // Add Movie in moviesInCart Fake Array

        const obj = { id: item.id, title: item.title };
        moviesInCart.push(obj);
        console.log(obj);
        console.log(moviesInCart);

        // Try to add 
        //setMoviesInsideCart([...moviesInsideCart, obj]);
        //setMoviesInsideCart(moviesInsideCart => [...moviesInsideCart, obj])    
    }

    return (
        <div>
            <div className="card" id="movie-cards">
                <button id="add-movie-button" className="btn btn-secondary btn-sm" onClick={addMovieButton}>Add</button>
                <img src={imgUrl + item.poster_path} alt="movie-poster" />
                <h1>{item.title} </h1>
            </div>
        </div>
    )
}

export default Card;
