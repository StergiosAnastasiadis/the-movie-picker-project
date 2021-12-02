import React, { useState } from "react";

const Cart = ({ id, title, setMoviesInsideCart }) => {

    const deleteMovie = (event) => {
        //Remove Movie from moviesInsideCart Array

    }

    return (
        <div className="buy-list" key={id}>
            <p >{title} <button id="remove-item-button" className="btn" value={id} >Remove</button></p>
        </div>
    )
}

export default Cart;
