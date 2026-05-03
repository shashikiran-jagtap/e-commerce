import React from "react";
import image1 from "../../assets/image1.jpg";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../cartSlice";

function Product({ name, image, price, id }) {
  let dispatch = useDispatch();
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="details">
        <span className="name">{name} </span>
        <span className="price">{price}</span>
        <button
          onClick={() =>
            {dispatch(addItem({ name: name, image: image, price: price, id: id }))
             alert("Products Added Successfully...")
            }}>Add +</button>
      </div>
    </div>
  );
}

export default Product;
