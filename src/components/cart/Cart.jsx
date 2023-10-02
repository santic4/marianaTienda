import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import './Cart.css'
import { MdDoubleArrow } from 'react-icons/md';
import { BsArrowBarRight, BsArrowBarLeft } from 'react-icons/bs';
const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  const navigate = useNavigate();

  const handleGoBack = () => {
    // Utiliza navigate(-1) para retroceder una página
    navigate(-1);
  };

  if (totalQuantity === 0) {
    return (
      <div className='CartPage'>
        <h1>No hay items en el carrito</h1>
        <button onClick={handleGoBack} className='Option'>Volver a Productos</button>
      </div>
    );
  }

  return (
    <secion>
     <div className='tituloYbtn'>

     <div className='h1Category'>
      <h1>PRODUCTO <MdDoubleArrow /> CARRITO DE COMPRA</h1>
      </div>

     </div>
     <button className='btnBack' onClick={handleGoBack}><BsArrowBarLeft/>Atras</button>
    <section className='carrito'>

      <div className='precio'>
        <button onClick={() => clearCart()} className='buttonClear'>Limpiar Carrito</button>
        <h3>Subtotal: ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
        <button><Link to='/checkout' className='checkout'>Ir a comprar<BsArrowBarRight className='arrowBar'/> </Link></button>
      </div>

      <div className="CartPage">
      
        {cart.map(p =>
          <div key={p.id} className="CartItem">
            <h3>{p.title}</h3>
            <p src={p.description} alt={p.nombre} />
            <p>Precio (u.) : ${p.price}</p>
            <p>Cantidad: {p.quantity}</p> 
            <p>Talle: {p.talle}</p> 
            <p>Color: {p.color}</p> 
            <p>Peso: {p.peso}</p> 
          </div>)}
      </div>
    </section>
    </secion>
  );
};

export default Cart;
