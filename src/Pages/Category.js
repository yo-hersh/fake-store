import { Link } from "react-router-dom";

export default function Category(props) {
    const category = props.category;
    return <div className="category-list">
        {category.map(i => {
            return <Link to={`/category/${i}`} key={i}>
                <div className="category">
                    {i}
                </div>
            </Link>
        })}
    </div>
}