import { useContext } from "react";
import DataContext from "../context/DataContext";
import Loading from "./Loading";
import Card from "./Card";
import Cart from "./Cart";

const NestedComponents = () => {

  const { userSearchInput, moviesInsideCart, buyMoviesButton, data, isLoading, addMovieButton } = useContext(DataContext);

  return (
    <div className="flex-container">
      {
        (userSearchInput && data.length === 0) ? <h1>No Movies Found</h1>
          : (isLoading) ? <Loading />
            : <div className="movie-cards-container">
              {data.map((item) => (<Card item={item} key={item.id} buttonStatus={moviesInsideCart.some(mic => mic.id === item.id)} addMovieButton={() => addMovieButton({ ...item })} />))}
            </div>
      }
      <div className="movie-cart">
        <h5 className="card-title">Buy Movies</h5>
        {moviesInsideCart && moviesInsideCart.map((item) => (<Cart item={item} key={item.id} />))}
        <button className="btn btn-outline-warning buy-button" onClick={buyMoviesButton}>Purchase</button>
      </div>
    </div>
  )
}

export default NestedComponents;