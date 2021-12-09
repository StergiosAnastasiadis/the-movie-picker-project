import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Header = () => {

    const { moviesInsideCart }  =  useContext(DataContext);

    return (
        <header>
            <h1>You have selected {moviesInsideCart.length} Movies</h1>
        </header>
    )
}

export default Header;