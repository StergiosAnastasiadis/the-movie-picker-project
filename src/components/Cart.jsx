import React from "react";

const Cart = ({ id, title, setMoviesInsideCart }) => {

    const deleteMovie = () => {
        setMoviesInsideCart((moviesInsideCart) => {
            const newArray = [...moviesInsideCart].filter(movie => !(movie.id === id));
            return newArray
        })
    }

    return (
        <div className="buy-list" key={id}>
            <div className="cart-movie-title"><p >{title} </p></div>
            <div className="cart-movie-remove-button"><button id="remove-item-button" className="btn" onClick={deleteMovie}>Remove</button></div>
        </div>
    )
}

export default Cart;
