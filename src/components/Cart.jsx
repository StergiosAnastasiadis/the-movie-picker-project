import react from "react";
import cartMovies from "../cartMovies";

const Cart = () => {

    const divStyle = {
        width: "18rem"
    }

    const createCart = (props) => {
        return (
            <div>
                <li className="movie-inside-cart">{props.title} <a href="#" className="remove-cart-item"> &#10060; </a></li>
            </div>
        )

    }

    return (
        <div className="movie-cart">
            <div className="card" style={divStyle}>
                <div className="card-body">
                    <h5 className="card-title">Buy Movies</h5>
                    <ul>
                        {cartMovies.map(createCart)}
                    </ul>
                    <a href="#" className="btn btn-outline-warning">Buy Button</a>
                </div>
            </div>
        </div>
    )

}

export default Cart;