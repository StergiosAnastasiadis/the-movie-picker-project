import axios from "axios";

const getData = (userSearchInput) => {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=386f116d61a5532dc4337deb9a45133c&language=en-US&query=${userSearchInput}&page=1&include_adult=false`;

    return axios
        .get(url)
        .then(res => res.data.results)
        .catch(err => console.log(err));
};

export default getData;