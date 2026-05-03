import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/banner.png";
import "./Home.css";
import { category } from "../../category";
import Product from "../../components/Product/Product";
import { data } from "../../data";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  const [cat, setCat] = useState(data);
  function filterData(category) {
    const updateData = data.filter((item) => item.category === category);
    setCat(updateData);
  }
  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>

      <div className="category-section">
        {category.slice(0, 5).map((item) => (
          <div
            className="category-card"
            onClick={() => {
              filterData(item.name);
            }}
            key={item.name}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <h1>Trending Products</h1>
      <div className="product-section">
        {cat.slice(0, 7).map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
