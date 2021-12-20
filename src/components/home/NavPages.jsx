import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import Pagination from "react-js-pagination";

const NavPages = () => {

    const { totalPages, currentPage, setCurrentPage, movies } = useContext(DataContext);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

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