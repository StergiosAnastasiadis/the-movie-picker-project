import React from "react";
import movieInCart from "../movieInCart";

const Header = () => {

    return (
        <header>
            <h1>You have selected {movieInCart.length} Movies</h1>
        </header>
    )
}

export default Header;