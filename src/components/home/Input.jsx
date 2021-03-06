import React, { useState, useEffect, useContext } from "react";
import DataContext from "../../context/DataContext";
import initialFetch from "../../api/initialFetch";
import getMovies from "../../api/getMovies";
import { toast } from "react-toastify";

const Input = () => {

  const { userMovieSearch, setUserMovieSearch, setIsLoading, setMovies, movies, setTotalPages, currentPage, setCurrentPage, sortingButtonStatus, setSortingButtonStatus } = useContext(DataContext);

  useEffect(() => {
    setSortingButtonStatus("Order By");
    setCurrentPage(1);
    userMovieSearch === "" ?
      initialFetch(currentPage).then(res => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages <= 500 ? res.data.total_pages : 500);
      }).catch(err => { console.log(err); toast.error("Could not get initial data") })
      :
      getMovies(userMovieSearch, setIsLoading, currentPage).then(res => {
        setMovies(res.data.results); setTotalPages(res.data.total_pages)
      }).catch(err => { console.log(err); toast.error("Failed to get Data") })
  }, [userMovieSearch]);

  const lowestToHighest = () => {
    setSortingButtonStatus("Lowest");
    let newArray = movies.sort(
      (a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average)
    );
    setMovies([...newArray]);
  };

  const highestToLowest = () => {
    setSortingButtonStatus("Highest");
    let newArray = movies.sort(
      (a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average)
    );
    setMovies([...newArray]);
  };

  return (
    <div className="input-group mb-3">
      <input className="form-control input-field" type="text" placeholder="Search for movies..." autoComplete="off" autoFocus="autofocus" onChange={(event) => setUserMovieSearch(event.target.value)} />
      <div className="input-group-append">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {sortingButtonStatus}
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