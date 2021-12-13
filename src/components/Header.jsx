import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Header = () => {
  const { moviesInsideCart } = useContext(DataContext);

  return (
    <header>
      <h1 className="header-title">You have selected {moviesInsideCart.length} Movies</h1>
      <Link to="/auth/login">
        <button className="btn btn-outline-dark header-button">Sign In</button>
      </Link>
    </header>
  );
};

export default Header;
