import React from "react";


const Header = ({ moviesInsideCart }) => {

    return (
        <header>
            <h1>You have selected {moviesInsideCart.length} Movies</h1>
        </header>
    )
}

export default Header;