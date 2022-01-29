import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CartContext, getCartContext } from "../App";
import Product from "../Components/Product";
import { FaLevelUpAlt } from "react-icons/fa";


export default function ProductView(props) {
    const params = useParams(),
        navigate = useNavigate();
    const getCart = useContext(getCartContext);
    const [cart, setCart] = useContext(CartContext);

    const [product, setProduct] = useState([]);
    function getProduct() {
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(res => {
                setProduct(res.data)
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(getProduct, []);

    function goBackward() {
        navigate('/')
    }


    return <div className="product-list">
        <div className="arrow-up" onClick={goBackward}><FaLevelUpAlt /></div>
        {product.map(i => {
            return <Link style={{ textDecoration: 'none', fontSize: '10px', fontWeight: '600' }} className="productLink" to={`/product/${i.id}`} key={i.id} item={i} >
                <Product item={i} cart={cart} getCart={getCart} />
            </Link>
        })}
    </div>
}