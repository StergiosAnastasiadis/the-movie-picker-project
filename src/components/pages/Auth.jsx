import React from "react"
import { DataProvider } from "../../context/DataContext";
import LoginHeader from "../auth/LoginHeader";
import LoginForm from "../auth/LoginForm";
import { ToastContainer } from "react-toastify";

const Auth = () => {

    return (
        localStorage.getItem("Auth") === "true"
            ?
            <h1>You are already Logged In</h1>
            :
            <>
                <DataProvider>
                    <LoginHeader />
                    <LoginForm />
                    <ToastContainer />
                </DataProvider>
            </>
    )
}

export default Auth;