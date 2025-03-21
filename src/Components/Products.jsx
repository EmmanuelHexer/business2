import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://gist.githubusercontent.com/KwabenaIzen/80ce0e87052e50c902f6d8e6224de8dc/raw/dafa4802f011cb704d99732a162de809fbdab4b5/products.json",
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div className="products no-padding-wrapper">
      <h1>Food products</h1>
      <div className="foods">
        {data.map(({ imageUrl, name, description, category }) => (
          <div className="food">
            <img className="food-img" src={imageUrl} alt="" />
            <div className="food-category">{category}</div>
            <div className="food-name">{name}</div>
            <div className="food-description">{description}</div>
            <button className="food-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
