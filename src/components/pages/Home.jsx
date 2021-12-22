import React from "react";
import { DataProvider } from "../../context/DataContext";
import Header from "../home/Header";
import Input from "../home/Input";
import Cart from "../home/Cart";
import MoviesResultList from "../home/MoviesResultList";
import NavPages from "../home/NavPages";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <DataProvider>
        <Header />
        <Input />
        <ToastContainer />
        <Cart />
        <MoviesResultList />
        <NavPages />
      </DataProvider>
    </div>
  );
};

export default Home;
