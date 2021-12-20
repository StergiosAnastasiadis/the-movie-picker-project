import axios from "axios";
//``
const initialFetch = (currentPage) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=386f116d61a5532dc4337deb9a45133c&language=en-US&page=${currentPage}`

    return axios.get(url)
}

export default initialFetch;