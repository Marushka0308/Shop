import {Link} from "react-router-dom";
const ItemsList = (props) => {
    const items = props.items;

    return (
        <div className="home">
            {items.map((item) => (
                <div className="itemPreview" key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Description: {item.description}</p>
                    <p>Image: <img src = {item.image} alt= ""/></p>
                    <p>Price is : {item.price}</p>
                    <a href="https://en.wikipedia.org/wiki/Strawberry">Click to learn more</a>
                    <p><Link to = '/redirect'>Personal opinion</Link></p>
                </div>
            ))}
        </div>
    );
}
export default ItemsList;