import React from "react";
import { DataProvider } from "../context/DataContext";
import Header from "./home/Header";
import Input from "./home/Input";
import NestedComponents from "./home/NestedComponents";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <DataProvider>
        <Header />
        <Input />
        <ToastContainer />
        <NestedComponents />
      </DataProvider>
    </div>
  );
};

export default Home;
