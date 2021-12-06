import axios from "axios";

const purchaseMovies = (moviesInsideCart) => {

    const url = "https://api.mocklets.com/mock68075/";
    const config = { headers: {"X-Mocklets-PublicKey" : "txmovies", "X-Mocklets-Checksum" : "830c7cd4a70be6540a4898441ca02951"}};
    let moviesToBuy ={data:{movies:[]}};

    moviesInsideCart.map((movie) => {
        moviesToBuy.data.movies.push(movie.id);
        return moviesToBuy;
    })
    
    return axios.post(url, moviesToBuy, config)
        .then(res => res)
        .catch(err => console.log(err));

}

export default purchaseMovies;