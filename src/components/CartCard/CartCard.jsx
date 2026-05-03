import React from "react";
import "./CartCard.css"
import image1 from "./assets/image1.jpg"
import { RiDeleteBin6Line } from "react-icons/ri";

function CartCard() {
  return (
    <div className="Cartcard">
      <div className="left-card">
        <img src={image1} alt="" />
        <div className="name-price">
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="right-card">
        <button>
          Remove
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default cartCard;
