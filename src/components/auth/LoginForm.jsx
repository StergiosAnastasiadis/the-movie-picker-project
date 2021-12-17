import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { toast } from "react-toastify";

const LoginForm = () => {

    const { userName, setUserName } = useContext(DataContext);
    const [userPassword, setUserPassword] = useState("");

    let navigate = useNavigate();

    const handleUserLoginName = (event) => {
        setUserName(event.target.value);
    }

    const handleUserPassword = (event) => {
        setUserPassword(event.target.value);
    }

    const handleUserLogin = (event) => {
        event.preventDefault();
        if (userName === "") return (toast.warning("Please enter User Name!"));
        if (userPassword === "") return (toast.warning("Please enter Password!"));
        localStorage.setItem("Auth", true);
        localStorage.setItem("userName", userName)
        navigate("/");
    }

    return (
        <div className="login-input-container">
            <form>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="Enter User Name" autoFocus="autofocus" onChange={handleUserLoginName} />
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
