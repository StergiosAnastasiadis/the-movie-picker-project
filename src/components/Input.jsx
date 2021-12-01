import React from "react";

const Input = ({ setUserInput }) => {

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div>
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
        </div>
      </div>
    </div>
  );
};

export default Input;