import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { data } from '../data.js';
const HomeScreen = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { products } = await axios.get('/api/products');
//       setData(products);
//     };
//     fetchData();
//     return () => {
//       //
//     };
//   }, []);

  return (
    <section className="section">
      <h2 className="section-title">Featured Products</h2>
      <div className="products-center">
        {data.map((d) => (
          <article key={d.slug} className="product">
            <div>
              <Link to={`/product/${d.slug}`}>
                <img src={d.image} alt={d.name} />
              </Link>
            </div>
            <div className="product-footer">
              <h4>{d.name}</h4>
              <h5>${d.price}</h5>
            </div>
            <button className="btn btn-primary  btn-details">
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};
export default HomeScreen;
