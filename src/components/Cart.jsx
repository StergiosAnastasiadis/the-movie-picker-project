import React, { useState } from "react";

const Cart = ({ id, title, setMoviesInsideCart }) => {

    const deleteMovie = () => {
        setMoviesInsideCart((moviesInsideCart) => {
            const newArray = [...moviesInsideCart].filter(movie => movie.id != id);
            return newArray
        })
    }

    return (
        <div className="buy-list" key={id}>
            <p >{title} </p>
            <button id="remove-item-button" className="btn" onClick={deleteMovie}>Remove</button>
        </div>
    )
}

export default Cart;
