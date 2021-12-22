import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const Header = () => {
  const { moviesInsideCart, setIsAuth, isAuth, userName, setUserName } = useContext(DataContext);

  const logoutUser = () => {
    setUserName("");
    setIsAuth(false);
    localStorage.setItem("Auth", Boolean(false))
    localStorage.setItem("userName", String(""))
  }

  return (
    <header>
      {
        <>
          <h1 className="header-title">Hello {isAuth ? userName + ", " : ""}
            you have {moviesInsideCart.length === 0 ? "0  Movies in your Cart"
              : moviesInsideCart.length === 1
                ? "1 Movie in your Cart"
                : moviesInsideCart.length + " Movies in your Cart"}</h1>
          {isAuth
            ? <button className="btn btn-outline-dark header-button" onClick={logoutUser}>Logout</button>
            :
            <Link to="/auth/login">
              <button className="btn btn-outline-dark header-button">Sign In</button>
            </Link>
          }
        </>
      }
    </header>
  );
};

export default Header;
