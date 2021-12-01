// HINTS
// jsx doesnt expect class attribute  | DONE
// you can add the form submition only in <form></form> tag
// check if you can search movie while user typing in search bar | DONE console.log items while user is typing

import React from "react";

const Input = ({setUserInput, getData}) => {

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <form onSubmit={getData}>
        <div className="input-group mb-3">
          <input className="form-control" id="input-field" type="text" placeholder="Search for movies..." autoFocus="autofocus" onChange={handleUserInput} />
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
    </div>
  );
};

export default Input;