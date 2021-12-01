import React from "react";
import moviesInCart from "../moviesInCart";

const Cart = () => {


    const createCart = (movie) => {
        return (
            <div className="buy-list" key={movie.id}>
                <p >{movie.title} <button id="remove-item-button" className="btn" value={movie.id} onClick={deleteMovie}>Remove</button></p>
            </div>
        )
    }

    const deleteMovie = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="movie-cart">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Buy Movies</h5>
                    {moviesInCart.map(createCart)}
                    <button className="btn btn-outline-warning">Buy Button</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;