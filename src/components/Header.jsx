import React from "react";
import moviesInCart from "../moviesInCart";

const Header = () => {

    return (
        <header>
            <h1>You have selected {moviesInCart.length} Movies</h1>
        </header>
    )
}

export default Header;