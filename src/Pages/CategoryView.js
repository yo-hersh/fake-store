import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function CategoryView() {

    const [category, setCategory] = useState([]);
    function getCategory() {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => {
                setCategory(res.data)
            }).catch(error => {
                console.log(error);
            })
    }
    useEffect(getCategory, []);

    return <div className="category-list">
        {category.map(i => {
            return <Link to={`/category/${i}`} key={i} style={{ textDecoration: 'none' }}>
                <div className="category">
                    {i}
                </div>
            </Link>
        })}
    </div>
}