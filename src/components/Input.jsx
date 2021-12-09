import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Input = () => {

  const { lowestToHighest, highestToLowest, handleUserSearchInput } = useContext(DataContext);

  return (
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
            </div>
          </div>
        </div>
      </div>
  );
};

export default Input;