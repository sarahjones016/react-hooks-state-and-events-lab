import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  
  const liClass = isInCart ? "in-cart" : ""
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart"
  const buttonColor = isInCart ? "remove" : "add"

  function cartClickHandler() {
    setIsInCart(!isInCart);
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonColor} onClick={cartClickHandler}>{buttonText}</button>
    </li>
  );
}

export default Item;
 