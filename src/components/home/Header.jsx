import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const Header = () => {
  const { moviesInsideCart, setIsAuth, isAuth, userName } = useContext(DataContext);

  const logoutUser = () => {
    setIsAuth(false);
    localStorage.setItem("Auth", Boolean(false))
  }

  return (
    <header>
      {
        isAuth ?
          <>
          <h1 className="header-title">Hello {userName}, You have {moviesInsideCart.length} Movies in Cart</h1>
          <button className="btn btn-outline-dark header-button" onClick={logoutUser}>Logout</button>
          </>
          :
          <>
          <h1 className="header-title">You have {moviesInsideCart.length} in Movies</h1>
          <Link to="/auth/login">
            <button className="btn btn-outline-dark header-button">Sign In</button>
          </Link>
          </>
      }
    </header>
  );
};

export default Header;
