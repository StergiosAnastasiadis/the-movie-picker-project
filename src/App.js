import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Cart from "./components/Cart";
import Card from "./components/Card";
import "./App.css";
import axios from "axios"

// pame na doume pws mporoume na kanoume to app parent

function App() {
  // edw tha mpoun ta state tou component
  const [userSearchInput, setUserSearchInput] = useState("");
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=386f116d61a5532dc4337deb9a45133c&language=en-US&query=${userSearchInput}&page=1&include_adult=false`;

  useEffect(() => {
    userSearchInput && getData();
  }, [userSearchInput]);

  const getData = () => {

    axios.get(url).then((response) => {
      setData(response.data.results);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Header />

      <Input setUserSearchInput={setUserSearchInput} />

      <div className="add_your_flex_styling_check_wrap">
        {data.map((item) => (<Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} />))}
      </div>

      <Cart />
    </div>
  );
}

export default App;
