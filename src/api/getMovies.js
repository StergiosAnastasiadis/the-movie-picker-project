import axios from "axios";

const getMovies = async (userMovieSearch, setIsLoading) => {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=386f116d61a5532dc4337deb9a45133c&language=en-US&query=${userMovieSearch}&page=1&include_adult=false`;

    setIsLoading(true);
    setTimeout(() => { setIsLoading(false) }, 500);
    return await axios.get(url)
};

export default getMovies;