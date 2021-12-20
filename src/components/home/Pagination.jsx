import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

const Pagination = () => {

    const { totalPages, currentPage, setCurrentPage, movies } = useContext(DataContext);

    const nextPageButton = () => {
        (currentPage === totalPages) ? setCurrentPage(1) : setCurrentPage(currentPage + 1);
    }

    const previousPageButton = () => {
        (currentPage === 1) ? setCurrentPage(totalPages) : setCurrentPage(currentPage - 1);
    }

    return (
        (movies.length === 0) ? <></>
            :
            <div>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" onClick={previousPageButton}>Previous</button></li>
                        {totalPages === 1 || totalPages === 2 ?
                            <li className="page-item"><button className="page-link selected-page-button" disabled >{currentPage}</button></li>
                            :
                            <>
                                <li className="page-item"><button className="page-link" >{(currentPage === 1) ? totalPages : currentPage - 1}</button></li>
                                <li className="page-item"><button className="page-link selected-page-button" disabled >{currentPage}</button></li>
                                <li className="page-item"><button className="page-link" >{currentPage + 1}</button></li>
                            </>
                        }
                        <li className="page-item"><button className="page-link" onClick={nextPageButton}>Next</button></li>
                    </ul>
                </nav>
            </div>
    )
}


export default Pagination;