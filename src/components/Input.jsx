import React from "react";

const Input = ({ setUserSearchInput, data, setData, vote_average }) => {

  const handleUserSearchInput = (event) => {
    setUserSearchInput(event.target.value);
  }

  const lowestToHighest = () => {
    let newArray = data.sort((a, b) =>  parseFloat(a.vote_average) - parseFloat(b.vote_average));
    setData(newArray);
  }

  const highestToLowest = () => {
    let newArray = data.sort((a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average));
    setData(newArray);
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input className="form-control" id="input-field" type="text" placeholder="Search for movies..." autoComplete="off" autoFocus="autofocus" onChange={handleUserSearchInput} />
        <div className="input-group-append">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Order By
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="btn btn-light dropdown-item" onClick={highestToLowest}>Highest</button>
              <button className="btn btn-light dropdown-item" onClick={lowestToHighest}>Lowest</button>
              <button className="btn btn-light dropdown-item">None</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;