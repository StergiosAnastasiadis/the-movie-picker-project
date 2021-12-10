import axios from "axios";

const initialFetch = ()  => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=386f116d61a5532dc4337deb9a45133c&language=en-US&page=1"
    
    return axios.get(url)
    .then(res => res)
    .catch(err => console.log(err));
}

export default initialFetch;