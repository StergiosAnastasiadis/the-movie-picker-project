// HINTS
// jsx doesnt expect class attribute
// you can add the form submition only in <form></form> tag
// check if you can search movie while user typing in search bar

import React, { useState } from "react";
import axios from "axios";

const Input = () => {

  const [userInput, setUserInput] = useState("");

  const url = `https://api.themoviedb.org/3/search/movie?api_key=386f116d61a5532dc4337deb9a45133c&language=en-US&query=${userInput}&page=1&include_adult=false`;

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  }

  const logItems = (cardItem) => {
    console.log(cardItem.title, cardItem.id);
  }

  const getData = (event) => {

    axios.get(url).then((response) => {
      const data = response.data.results;

      data.map(logItems);

      setUserInput("");
    })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  }

  return (
    <div>


      <form>
        <div className="input-group mb-3">
          <input className="form-control" id="input-field" type="text" placeholder="Search for movies..." autoFocus="autofocus" value={userInput} onChange={handleUserInput} />
          <div className="input-group-append">
            <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Order By
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Highest Rated</a>
                <a class="dropdown-item" href="#">Lowest Rated</a>
                <a class="dropdown-item" href="#">None</a>
              </div>
            </div>
            <button className="btn btn-warning" id="submit-button" type="submit" onClick={getData} onSubmit={getData}>Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
