// HINTS
// jsx doesnt expect class attribute  | DONE
// you can add the form submition only in <form></form> tag
// check if you can search movie while user typing in search bar | DONE console.log items while user is typing

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const Input = () => {

  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=386f116d61a5532dc4337deb9a45133c&language=en-US&query=${userInput}&page=1&include_adult=false`;

  useEffect(() => {
    getData();
  }, [userInput]);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  }

  const getData = () => {
    if (userInput === "") { return }

    axios.get(url).then((response) => {
      setData(response.data.results);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={getData}>
        <div className="input-group mb-3">
          <input className="form-control" id="input-field" type="text" placeholder="Search for movies..." autoFocus="autofocus" value={userInput} onChange={handleUserInput} />
          <div className="input-group-append">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Order By
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="btn btn-light">Highest Rated</button>
                <button className="btn btn-light">Lowest Rated</button>
                <button className="btn btn-light">None</button>
              </div>
            </div>
            <button className="btn btn-warning" id="submit-button" type="submit">Search</button>
          </div>
        </div>
      </form>
      <div className="add_your_flex_styling_check_wrap">
        {data.map((item) => (<Card key={item.key} title={item.title} poster_path={item.poster_path} />))}
      </div>
    </div>
  );
};

export default Input;