import React from "react"
import { DataProvider } from "../context/DataContext";
import LoginHeader from "./auth/LoginHeader";
import LoginForm from "./auth/LoginForm";

const Auth = () => {

    let storedAuthStatus = localStorage.getItem("Auth");

    return (
        storedAuthStatus === "true"
            ?
            <h1>You are already Logged In</h1>
            :
            <>
                <DataProvider>
                    <LoginHeader />
                    <LoginForm />
                </DataProvider>
            </>
    )
}

export default Auth;