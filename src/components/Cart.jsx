import cartMovies from "../cartMovies";

const Cart = () => {

    const createCart = (props) => {
        return (
            <div className="buy-list" key={props.key}>
                <p >{props.title} <a href="" className="remove-item">Remove</a></p>
            </div>
        )
    }

    return (
        <div className="movie-cart">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Buy Movies</h5>
                    {cartMovies.map(createCart)}
                    <a href="#" className="btn btn-outline-warning">Buy Button</a>
                </div>
            </div>
        </div>
    )
}

export default Cart;