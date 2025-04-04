import { Link } from "react-router-dom";

const Product = ({ imageUrl, category, foodName, description }) => {
  return (
    <div className="food">
      <img className="food-img" src={imageUrl} alt={foodName} />
      <div className="food-category">{category}</div>
      <div className="food-name">{foodName}</div>
      <div className="food-description">{description}</div>
      <Link to={`/product/${foodName}`}>
        <button className="food-btn">View Details</button>
      </Link>
    </div>
  );
};

export default Product;
