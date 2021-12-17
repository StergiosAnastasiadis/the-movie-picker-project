import React from "react";
import { DataProvider } from "../context/DataContext";
import Header from "./home/Header";
import Input from "./home/Input";
import MoviesResultList from "./home/MoviesResultList";
import Cart from "./home/Cart";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <DataProvider>
        <Header />
        <Input />
        <ToastContainer />
        <MoviesResultList />
        <Cart />
      </DataProvider>
    </div>
  );
};

export default Home;
