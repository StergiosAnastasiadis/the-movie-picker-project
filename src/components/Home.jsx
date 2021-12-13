import React from "react";
import { DataProvider } from "../context/DataContext";
import Header from "./Header";
import Input from "./Input";
import NestedComponents from "./NestedComponents";
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
