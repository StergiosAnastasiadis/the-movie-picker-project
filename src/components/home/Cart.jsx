import React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Cart = ({ item }) => {

    const { setMoviesInsideCart } = useContext(DataContext);

    const deleteMovie = () => {
        setMoviesInsideCart((moviesInsideCart) => {
            const newArray = moviesInsideCart.filter(movie => !(movie.id === item.id));
            return newArray
        })
    }

    return (
        <div className="buy-list">
            <div className="cart-movie-title"><p >{item.title} </p></div>
            <div className="cart-movie-remove-button">
            <button className="btn remove-item-button" onClick={deleteMovie}>Remove</button></div>
        </div>
    )
}

export default Cart;
