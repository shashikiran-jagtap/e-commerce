import React from "react";
import "./Cart.css";
import image from "../../assets/emptycart.png";
import CartCard from "../../components/CartCard/CartCard";
import { useSelector } from "react-redux";

function Cart() {
  let items = useSelector((state) => state.cart);
  let total=items.reduce((a,b)=>a +b.price, 0);

  return (
    <div className="cart">
      {items.length <= 0 ? (
        <div className="empty-cart">
          <img src={image} alt="" />
          <h1>Empty Cart</h1>
        </div>
      ) : (
        <div className="cartCard-section">
          {items.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))}

          <div className="price-section">
            <span>Total Products:{items.length}</span>
            <span>Total Price:{total}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
