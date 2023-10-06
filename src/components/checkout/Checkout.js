import React, { useContext, useState, useRef } from "react";
import './Checkout.css'
import { CartContext } from '../../context/cartContext';
import emailjs from '@emailjs/browser';

function Checkout() {
  const { cart, total, addBuyer } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [buyerInfo, setBuyerInfo] = useState(null);
  const [orderDate, setOrderDate] = useState(null);
  const form = useRef();

  const agregarPorcentajeAlTotal = (total) => {
    if (typeof total !== 'number' || isNaN(total)) {
      return 'El valor total no es válido';
    }
  
    const porcentaje = total * 0.105;
    const nuevoTotal = total + porcentaje;
  
    const totalFormateado = nuevoTotal.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    return totalFormateado;
  };

  const totalIva = agregarPorcentajeAlTotal(total);

  const cartItemsText = cart.map((item) => {
    console.log()
    return `Orden ID (Asunto de la transferencia): ${orderId}, Título: ${item.title}, Color: ${item.color}, Talle: ${item.talle}, Peso: ${item.peso}, Precio: ${totalIva}, Cantidad: ${item.quantity}\n`;
  }).join("");



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_liqkdd9', 'template_wtso76e', form.current, '2xEmaBAzrQxCdyyxa')
      .then((result) => {
        console.log('Correo electrónico enviado con éxito');
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });
  };

  const handlePaymentClick = () => {
    const emailInput = document.getElementById('emailInput');
    const nameInput = document.getElementById('nameInput');
    const addressInput = document.getElementById('addressInput');
    const countryInput = document.getElementById('countryInput');
    const apartmentInput = document.getElementById('apartmentInput');
    const provinceInput = document.getElementById('provinceInput');
    const postalCodeInput = document.getElementById('postalCodeInput');
    const phoneInput = document.getElementById('phoneInput');
    const emailValue = emailInput.value;
    const nameValue = nameInput.value;
    const addressValue = addressInput.value;
    const provinceValue = provinceInput.value;
    const countryValue = countryInput.value;
    const apartmentValue = apartmentInput.value;
    const postalCodeValue = postalCodeInput.value;
    const phoneValue = phoneInput.value;

    const nameCollection = 'Orders'

    setOrderDate(new Date());
    
    addBuyer(emailValue, provinceValue, countryValue, postalCodeValue, phoneValue, apartmentValue, nameValue, addressValue, cart, setOrderId, setBuyerInfo, nameCollection);
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
      <section className="padreSection">
      <div className="comprobante-card">
        {buyerInfo && (
          <div className="comprobante-info">
            <h4 className="comprobante-title">Comprobante</h4>
            <p><strong>NOMBRE y APELLIDO</strong></p>
            <p>{buyerInfo.name}</p>
            <p><strong>CORREO ELECTRÓNICO</strong></p>
            <p>{buyerInfo.email}</p>
            <p><strong>DIRECCIÓN</strong></p>
            <p>{buyerInfo.address}</p>
            <p><strong>FECHA</strong></p>
            <p>{orderDate && (formatDate(orderDate) + " (Arg)") }</p>
            <p><strong>ID ORDEN</strong></p>
            <p>{id}</p>
            <p><strong>Monto total a depositar</strong></p>
            <p className="totalIVA">{totalIva}</p>
          </div>
          
        )}
      </div >

      <div className="comprobante-card">
        <h3>Transferencia directa</h3>
        <h4>BBVA</h4>
        <p>CUIT: 30710849133</p>
        <p>RAZON SOCIAL: GEMAL SAN NICOLAS SR</p>
        <p>ALIAS: PERNO.TEATRO.CATRE</p>
        <p>CBU: 0170079420000032831980</p>
        <p>CUENTA: CC$ 079-32831918</p>
        <h3>Recorda poner como referencia/motivo tu nombre y apellido</h3>
      </div>
      </section>
      
    );
  }

  
  return (
    <div>
    <section className="sectionCheck">
      {orderId ? (
        <div>
          {ticket(orderId)}
        </div>
      ) : (
        <>
          <div className="carritoCheckout">
            <h1>Detalle de la compra</h1>
            <p className="pPago">*Metodo de pago: Transferencia directa</p>
            {cart.map(p =>
              <div key={p.id} className="CartItem">
                <h3>{p.title}</h3>
                <p>Precio (u.) : ${p.price}</p>
                <p>Color: {p.color}</p> 
                <p>Talle: {p.talle}</p> 
              </div>
            )}
            <p className="pPago">*10,5% IVA.</p>
            <h3>Total: ${totalIva}</h3>
          </div>

          <div className="container">
            <h1>Datos de envío</h1>
            <form id="checkout-form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Nombre y apellido:</label>
              <input id="nameInput" type="text" name="user_name" required />

              <label htmlFor="email">Correo Electrónico:</label>
              <input id="emailInput" type="email" name="user_email" required />

              <label htmlFor="address">Dirección:</label>
              <textarea id="addressInput" name="user_address" rows="1" required></textarea>

              <input type="hidden" name="cart_items" value={cartItemsText} />
              <input type="hidden" name="total" value={total} />

              <label htmlFor="apartment">Nº Departamento / Habitación:</label>
              <input id="apartmentInput" type="text" name="user_apartment" />

              <label htmlFor="province">Provincia:</label>
              <input id="provinceInput" type="text" name="user_province" required />

              <label htmlFor="country">Localidad:</label>
              <input id="countryInput" type="text" name="user_country" required />

              <label htmlFor="postalCode">Código Postal:</label>
              <input id="postalCodeInput" type="text" name="user_postal_code" required />

              <label htmlFor="phone">Teléfono:</label>
              <input id="phoneInput" type="text" name="user_phone" required />

              <label htmlFor="message">Mensaje adicional: </label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button id="botonClick" type="submit" onClick={handlePaymentClick}>Enviar Formulario</button>
            </form>
          </div>
        </>
      )}

    </section>
   
    <p className="pMetodo">*Metodo de pago: Una vez completado el formulario se le mostrara los datos de transferencia directa</p>
    </div>
  );
}

export default Checkout;