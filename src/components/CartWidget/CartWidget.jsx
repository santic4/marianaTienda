import React, { useContext } from 'react';
import { SlHandbag } from 'react-icons/sl';
import './CartWidget.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
  const { cartQuantity } = useContext ( CartContext );

  return (
    <div className="cart-widget">
    <Link to="/cart">
      <SlHandbag className='iconsCart' />
      {cartQuantity() > 0 && <span className="notification">{cartQuantity()}</span>}
    </Link>
  </div>
  );
};

export default CartWidget;
