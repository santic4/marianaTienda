import React, { useContext, useState } from "react";
import './Checkout.css'
import { CartContext } from '../../context/cartContext';

function Checkout() {
  const { cart, total, addBuyer } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [buyerInfo, setBuyerInfo] = useState(null);
  const [orderDate, setOrderDate] = useState(null);
  console.log(cart)

  const handlePaymentClick = () => {
    const emailInput = document.getElementById('emailInput');
    const nameInput = document.getElementById('nameInput');
    const addressInput = document.getElementById('addressInput');
    const emailValue = emailInput.value;
    const nameValue = nameInput.value;
    const addressValue = addressInput.value;
    
    const nameCollection = 'Orders'

    setOrderDate(new Date());
    addBuyer(emailValue, nameValue, addressValue, cart, setOrderId, setBuyerInfo, nameCollection);

   
  };


  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }


  function ticket(id) {
    return (
      <div className="comprobante-card">
      
      {buyerInfo && (
 
        <div className="comprobante-info">
          <h4 className="comprobante-title">Comprobante</h4>
          <p><strong>NOMBRE</strong></p>
          <p>{buyerInfo.name}</p>
          <p><strong>CORREO ELECTRÓNICO</strong></p>
          <p>{buyerInfo.email}</p>
          <p><strong>DIRECCIÓN</strong></p>
          <p>{buyerInfo.address}</p>
          <p><strong>FECHA</strong></p>
          <p>{orderDate && (formatDate(orderDate) + " (Arg)") }</p>
          <p><strong>ID ORDEN</strong></p>
          <p>{id}</p>
        </div>
      )}
    </div>
    );
  }


  return (
    <section className="sectionCheck">
      {orderId ? (
        <div>
          {ticket(orderId)}
        </div>
      ) : (
        <>
          <div className="carritoCheckout">
            <h1>Detalle de Compra</h1>
            {cart.map(p =>
              <div key={p.id} className="CartItem">
                <h3>{p.title}</h3>
                <p>Precio (u.) : ${p.price}</p>
                <p>Cantidad: {p.quantity}</p> 
              </div>
            )}

            <h3>Total: ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
          </div>

          <div className="container">
            <h1>Formulario de Compra</h1>
            <form id="checkout-form">
              <label htmlFor="name">Nombre:</label>
              <input id="nameInput" type="text" name="name" required />

              <label htmlFor="email">Correo Electrónico:</label>
              <input id="emailInput" type="email" name="email" required />

              <label htmlFor="address">Dirección:</label>
              <textarea id="addressInput" name="address" rows="1" required></textarea>


              <label htmlFor="message">Mensaje adicional:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button onClick={handlePaymentClick} id="botonClick" type="button">Realizar Pago</button>
            </form>
          </div>
        </>
      )}
    </section>
  );
}

export default Checkout;