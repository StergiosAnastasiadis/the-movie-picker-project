import movieInCart from "../movieInCart";

const Cart = () => {

    const createCart = (movie) => {
        return (
            <div className="buy-list" key={movie.key}>
                <p >{movie.title} <button id="remove-item-button" className="btn">Remove</button></p>
            </div>
        )
    }

    return (
        <div className="movie-cart">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Buy Movies</h5>
                    {movieInCart.map(createCart)}
                    <button className="btn btn-outline-warning">Buy Button</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;