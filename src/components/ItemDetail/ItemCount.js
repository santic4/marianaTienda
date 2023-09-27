import React, { useState } from 'react';


const ItemCount = ({ stock, onAdd, initial, cart }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="buttons-container">
        <button className="custom-button minus-button" onClick={restar}>-</button>
        <span>{count}</span>
        <button className="custom-button plus-button" onClick={sumar}>+</button>
      </div>
      <button className="custom-button buy-button" disabled={count === 0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
