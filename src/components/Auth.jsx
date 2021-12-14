import React from "react"
import { DataProvider } from "../context/DataContext";
import LoginHeader from "./auth/LoginHeader";
import LoginForm from "./auth/LoginForm";

const Auth = () => {
    return(
        <>
        <DataProvider>
        <LoginHeader />
        <LoginForm />
        </DataProvider>
        </>
    )

}

export default Auth;