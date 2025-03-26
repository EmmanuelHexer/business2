import { useState, useEffect } from "react";
import Product from "./Product";
const Products = ({ products }) => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          "https://gist.githubusercontent.com/KwabenaIzen/80ce0e87052e50c902f6d8e6224de8dc/raw/3e801a6285b80289958c5aa98722256b504a250c/products.json",
        );
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="products no-padding-wrapper" ref={products}>
      {" "}
      <h1>Food products</h1>{" "}
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
