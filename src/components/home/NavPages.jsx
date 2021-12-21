import React, { useContext, useEffect } from "react";
import initialFetch from "../../api/initialFetch";
import getMovies from "../../api/getMovies";
import DataContext from "../../context/DataContext";
import Pagination from "react-js-pagination";
import { toast } from "react-toastify";

const NavPages = () => {

    const { userMovieSearch, totalPages, currentPage, setCurrentPage, movies, setMovies, setSortingButtonStatus, setIsLoading, setTotalPages } = useContext(DataContext);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        setSortingButtonStatus("Order By");
        userMovieSearch === "" ?
            initialFetch(currentPage).then(res => { setMovies(res.data.results); })
                .catch(err => { console.log(err); toast.error("Could not get initial data") })
            :
            getMovies(userMovieSearch, setIsLoading, currentPage).then(res => {
                setMovies(res.data.results); setTotalPages(res.data.total_pages <= 500 ? res.data.total_pages : 500);
            }).catch(err => { console.log(err); toast.error("Failed to get Data") })
    }, [currentPage])

    return (
        (movies.length === 0) ? <></>
            :
            <Pagination
                activePage={currentPage}
                totalItemsCount={totalPages}
                pageRangeDisplayed={8}
                onChange={handlePageChange}
                activeClass="page-item"
                linkClass="page-link"
                activeLinkClass="selected-page"
            />
    )
}

export default NavPages;