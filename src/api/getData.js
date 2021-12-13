import axios from "axios";

const getData = async (userSearchInput, setIsLoading) => {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=386f116d61a5532dc4337deb9a45133c&language=en-US&query=${userSearchInput}&page=1&include_adult=false`;

    setIsLoading(true);
    return await axios
        .get(url)
        .then((res) => {
            setTimeout(() => { setIsLoading(false) }, 500);
            return res.data.results
        })
        .catch(err => console.log(err));
};

export default getData;