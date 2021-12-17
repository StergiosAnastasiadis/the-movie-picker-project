import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Loading from "./Loading";
import Card from "./Card";

const MoviesResultList = () => {

  const { userMovieSearch, moviesInsideCart, setMoviesInsideCart, movies, isLoading } = useContext(DataContext);

  const addMovieButton = (card) => {
    setMoviesInsideCart((moviesInsideCart) => [...moviesInsideCart, card]);
  };

  return (
    <div className="flex-container">
      {
        (userMovieSearch && movies.length === 0) ? <h1>No Movies Found</h1>
          : (isLoading) ? <Loading />
            : <div className="movie-cards-container">
              {movies.map((item) => (<Card item={item} key={item.id} buttonStatus={moviesInsideCart.some(mic => mic.id === item.id)} addMovieButton={() => addMovieButton({ ...item })} />))}
            </div>
      }
    </div>
  )
}

export default MoviesResultList;