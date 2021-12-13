import React from 'react';
import { Link } from "react-router-dom";

const LoginHeader = () => {
        return (
            <header>
              <h1 className="header-title">Sign In</h1>
              <Link to="/">
                <button className="btn btn-outline-dark header-button">Home</button>
              </Link>
            </header>
          );
}

export default LoginHeader;