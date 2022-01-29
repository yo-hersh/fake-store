import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { CartContext, getCartContext } from "../App";
import Product from "../Components/Product";
import { FaLevelUpAlt } from "react-icons/fa";

export default function Details(props) {
    const params = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);

    function getDetails() {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => {
                setDetails(res.data)
            }).catch(e => {
                console.log(e);
            })
    }
    useEffect(getDetails, []);

    function goBackward(e) {
        console.log(e);
        navigate(`/category/${details.category}`)
    }

    const getCart = useContext(getCartContext);
    const [cart, setCart] = useContext(CartContext);

    return <div className="details" >
        <div className="arrow-up" onClick={goBackward}><FaLevelUpAlt /></div>
        <Product item={details} cart={cart} getCart={getCart} description={details.description} />
    </div>
}