import { useContext } from "react"
import { getCartContext } from "../App"
import Product from "../Components/Product";

export default function Cart(props) {
    const getCart = useContext(getCartContext);
    function getPrice() {
        if (props.cart != {}) {
            const price = props.cart.reduce((acc, curr) => acc + (curr['count'] * curr['price']), 0)
            return price;
        }
    }

    const product = props.cart;
    return <div className="cart">
        <div className="cart_list">
        {product.map(p => {
            return <div className="cart_product" key={p.id}>
                <Product item={p} cart={props.cart} getCart={getCart} />
            <hr/>
            </div>
        })}
        </div>
        <div className="cart_price">
            <hr></hr>
            <h5>total: {getPrice().toFixed(2)}$ </h5>
        </div>
    </div>
}