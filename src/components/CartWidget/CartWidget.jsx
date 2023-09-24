import React, { useContext } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
  const { cartQuantity } = useContext ( CartContext );

  return (
    <div className="cart-widget">
      <Link to="/cart">

      <FontAwesomeIcon icon={faShoppingCart} />
      
      {cartQuantity() > 0 && <span className="notification">{ cartQuantity() }</span>}
      </Link>
    </div>
  );
};

export default CartWidget;