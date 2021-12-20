import React from "react";
import { DataProvider } from "../context/DataContext";
import Header from "./home/Header";
import Input from "./home/Input";
import Cart from "./home/Cart";
import MoviesResultList from "./home/MoviesResultList";
import Pagination from "./home/Pagination";
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
        <Pagination />
      </DataProvider>
    </div>
  );
};

export default Home;
