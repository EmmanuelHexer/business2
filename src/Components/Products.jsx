import { useState, useEffect, useRef } from "react";
import Product from "./Product";
const Products = ({ products }) => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const originalDataRef = useRef([]);

  const reload = () => {
    window.location.reload();
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/KwabenaIzen/products-json@main/products%20json/products.json",
        );
        const data = await response.json();
        if (data && data.length) setData(data);
        originalDataRef.current = data;
      } catch (err) {
        setError(err.message);
        console.log("Error fetching data", data);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  const filterFood = (filter) => {
    const filteredData = originalDataRef.current
      .slice()
      .filter(
        (product) => product.category.toLowerCase() === filter.toLowerCase(),
      );

    setData(filteredData.length > 0 ? filteredData : originalDataRef.current);
  };

  return (
    <div className="products no-padding-wrapper" ref={products} id="products">
      {" "}
      <div className="header-filter">
        <h1>Food products</h1>
        <select
          id="filter"
          defaultValue={"default"}
          onChange={(e) => filterFood(e.target.value)}
        >
          <option value="all">All</option>
          <option value="local">Local Dishes</option>
          <option value="continental">Continental Dishes</option>
          <option value="pastry">Pastry</option>
        </select>
      </div>
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <div className="error-message">
          {" "}
          <div>Couldn't get the products...</div>{" "}
          <p>Please check your connection and try again.</p>{" "}
          <button onClick={reload}>↻ Refresh the page</button>{" "}
        </div>
      ) : (
        <div className="foods">
          {" "}
          {data.slice(0, visibleCount).map((product, index) => (
            <Product
              key={index}
              imageUrl={product.imageUrl}
              foodName={product.name}
              category={product.category}
            />
          ))}{" "}
        </div>
      )}{" "}
      {visibleCount < data.length && (
        <button onClick={() => loadMore()} className="load-food">
          {" "}
          View More <span className="arrow-down">↓</span>{" "}
        </button>
      )}{" "}
    </div>
  );
};
export default Products;
