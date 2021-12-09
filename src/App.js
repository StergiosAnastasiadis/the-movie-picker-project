import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import NestedComponents from "./components/NestedComponents";
import { DataProvider } from "./context/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {

  return (
    <div className="App">
        <DataProvider >
        <Header  />
        <Input />
        <ToastContainer />
        <NestedComponents />
      </DataProvider>
    </div>
  );
}

export default App;