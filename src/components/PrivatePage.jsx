import React from "react";

const PrivatePage = () => {

    let storedAuthStatus = localStorage.getItem("Auth");
    const privatePage = <h1>This is a Private Page</h1>;
    const unauthorized = <h1>Unauthorized</h1>;

    return (
        storedAuthStatus === "true" ? privatePage : unauthorized
    )
}

export default PrivatePage;
