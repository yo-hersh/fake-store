import { useContext } from "react/cjs/react.development";
import { CartContext, getCartContext } from "../App";

export default function Product(props) {
    const i = props.item,
        description = props.description || null,
        [cart, setCart] = useContext(CartContext),
        getCart = useContext(getCartContext);

    return <div className="product" >
        <h3>{i.title}</h3>
        {description ? <h5>{description}</h5> : null}
        <div className="bottom_product">
            <img src={i.image} style={{ maxWidth: "30px" }} />
            <h3>price: {i.price}$</h3>
            {!cart || !cart.find(p => p.id == i.id) ?
                <button className="addToCart" onClick={(e) => {
                    e.preventDefault()
                    getCart(i, '+')
                }
                }>add to cart</button> :
                <div className="add_remove">
                    <button onClick={(e) => {
                        console.log(cart);
                        e.preventDefault()
                        getCart(i, '+')
                    }
                    }>+</button>
                    <span>{cart.find(p => p.id == i.id)['count']}</span>
                    <button onClick={(e) => {
                        console.log(cart);
                        e.preventDefault();
                        getCart(i, '-')
                    }
                    }>-</button>
                </div>
            }
        </div>
    </div>
}