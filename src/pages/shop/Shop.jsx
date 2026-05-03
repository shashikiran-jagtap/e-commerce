import React, { useState } from "react";
import { FaShopify } from "react-icons/fa6";
import "./Shop.css";
import { category } from "../../category";
import { data } from "../../data";
import Product from "../../components/Product/Product";

export default function Shop() {
  const [cat, setCat] = useState(data);
  function filterData(category) {
    if (category === "All") {
      setCat(data);
    } else {
      const updateData = data.filter((item) => item.category === category);
      setCat(updateData);
    }
  }

  return (
    <div className="shop">
      <div className="heading">
        <span>Shop</span>
        <FaShopify />
      </div>
      <div className="category-section">
        {category.map((item) => (
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
      <div className="product-section">
        {cat.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
