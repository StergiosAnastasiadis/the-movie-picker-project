import React, { useState } from "react";

const Cart = ({ id, title, setMoviesInsideCart }) => {

    const deleteMovie = () => {
        //Remove Movie from Cart

    }

    return (
        <div className="buy-list" key={id}>
            <p >{title} </p>
            <button id="remove-item-button" className="btn" onClick={deleteMovie}>Remove</button>
        </div>
    )
}

export default Cart;
