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
        //Remove Movie from moviesInCart Array
        const movieToDelete = event.target.value;

        for (var i = 0; i < moviesInCart.length; i++) {
            var obj = moviesInCart[i];

            if (movieToDelete.indexOf(obj.id) !== -1) {
                moviesInCart.splice(i, 1);
                i--;
            }
        }
        console.log(moviesInCart);
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