import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";

const LoginForm = () => {

    const { userName, setUserName } = useContext(DataContext);

    let navigate = useNavigate();

    const handleUserLoginName = (event) => {
        setUserName(event.target.value);
        console.log(event.target.value);
    }

    const handleUserPassword = (event) => {
        console.log(event.target.value);
    }

    const handleUserLogin = (event) => {
        localStorage.setItem("Auth", true);
        localStorage.setItem("userName", userName)
        navigate("/");
        event.preventDefault();
        console.log("Login Data");
    }

    return (
        <div className="login-input-container">
            <form>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="Enter User Name" onChange={handleUserLoginName} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={handleUserPassword} />
                </div>
                <button type="submit" className="btn btn-warning login-sign-in-button" onClick={handleUserLogin}>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm;
