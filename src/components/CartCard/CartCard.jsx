import React from "react";
import "./CartCard.css"
import image1 from "../../assets/image1.jpg"
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeItem } from "../../cartSlice";
import { useDispatch } from "react-redux";

function CartCard({name,price,image,id}) {
  let dispatch = useDispatch()
  return (
    <div className="Cartcard">
      <div className="left-card">
        <img src={image} alt="" />
        <div className="name-price">
          <span>{name}</span>
          <span>RS {price}</span>
        </div>
      </div>

      <div className="right-card">
        <button onClick={()=>{
          dispatch(removeItem(id))
           alert("Products Removed Successfully...")
        }}>
          Remove
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default CartCard;
