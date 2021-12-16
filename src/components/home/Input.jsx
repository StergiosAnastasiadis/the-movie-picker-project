import React, { useEffect, useContext } from "react";
import DataContext from "../../context/DataContext";
import initialFetch from "../../api/initialFetch";
import getData from "../../api/getMovies";
import { toast } from "react-toastify";

const Input = () => {

  const { userSearchInput, setUserSearchInput, setIsLoading, setMovies, movies } = useContext(DataContext);

  useEffect(() => {
    initialFetch().then((res) => (typeof res !== "undefined") ? setMovies(res.data.results) : toast.error("Could not get initial data"));
  }, []);

  useEffect(() => {
    userSearchInput &&
      getData(userSearchInput, setIsLoading).then((res) => { (typeof res !== "undefined" ? setMovies(res) : toast.error("Failed to get Data")) });
  }, [userSearchInput]);

  const handleUserSearchInput = (event) => {
    setUserSearchInput(event.target.value);
  };

  const lowestToHighest = () => {
    let newArray = movies.sort(
      (a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average)
    );
    setMovies([...newArray]);
  };

  const highestToLowest = () => {
    let newArray = movies.sort(
      (a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average)
    );
    setMovies([...newArray]);
  };

  return (
    <div className="input-group mb-3">
      <input className="form-control input-field" type="text" placeholder="Search for movies..." autoComplete="off" autoFocus="autofocus" onChange={handleUserSearchInput} />
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