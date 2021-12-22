import React, { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import purchaseMovies from "../../api/purchaseMovies";
import { toast } from "react-toastify";

const Cart = () => {

    const { setMoviesInsideCart, moviesInsideCart, isAuth, userName } = useContext(DataContext);

    const [isBuyButtonClicked, setIsButtonClicked] = useState(false);

    const purchaseMoviesInsideCart = async () => {
        if (moviesInsideCart.length === 0 || isBuyButtonClicked) { return; }
        if (!isAuth) { return toast.warning("You have to be logged in to purchase movies") }
        setIsButtonClicked(true);
        purchaseMovies(moviesInsideCart)
            .then(res => purchaseSuccess(res))
            .catch(err => { toast.error("Failed to Purchase Movies, Please Try Again."); setIsButtonClicked(false); console.log(err) })
    }

    const notifySuccess = () => toast.success(`Congratulations ${userName} you purchased ${moviesInsideCart.length === 1 ? "1 Movie" : moviesInsideCart.length + " Movies"}`);

    const purchaseSuccess = (res) => {
        setMoviesInsideCart([]);
        setIsButtonClicked(false);
        notifySuccess();
        console.log(res.config.data);
    };

    const deleteMovie = (id) => {
        setMoviesInsideCart((moviesInsideCart) => {
            const newArray = moviesInsideCart.filter(movie => !(movie.id === id));
            return newArray
        })
    }

    return (
            <div className="movie-cart">
                <h5 className="card-title">Buy Movies</h5>
                {moviesInsideCart && moviesInsideCart.map(item => (
                    <div className="buy-list" key={item.id}>
                        <div className="cart-movie-title"><p >{item.title} </p></div>
                        <div className="cart-movie-remove-button" >
                            <button className="btn remove-item-button" onClick={() => deleteMovie(item.id)}>Remove</button></div>
                    </div>
                ))}
                <button className="btn btn-outline-warning buy-button" onClick={purchaseMoviesInsideCart}>Purchase</button>
            </div>
    )
}

export default Cart;
