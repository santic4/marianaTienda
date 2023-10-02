import React from 'react';
import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <section className="quienes-somos">
      <div className="preguntas-frecuentes">
        <h2>Preguntas Frecuentes</h2>
        <p><strong>¿Cómo realizo el pago por transferencia?</strong></p>
        <p>Si optas por transferencia bancaria es necesario que enviemos los datos para que puedas abonar por ese medio. Te enviaremos un mail con los mismos a la casilla con la que te registraste. Al utilizar este medio, te pedimos por favor que al momento del pago completes como referencia tu nombre y apellido o la referencia del pedido (referencia de letras mayúsculas que recibirás en el mail de confirmación de compra). Una vez efectuado el pago enviamos el comprobante por WhatsApp - 3364182955.</p>

        <p><strong>¿En qué momento envían mi pedido?</strong></p>
        <p>Cuando se acredita el pago el envío puede realizarse. En el plazo de 24/48 horas recibirás un mail con el número de seguimiento de tu compra y los pasos para poder realizar el seguimiento.</p>

        {/* Continuar con las demás preguntas frecuentes */}
      </div>

      <div className="politica-de-cambio">
        <h2>Política de Cambio</h2>
        <p>Puedes cambiar un producto hasta dentro de 10 días después de la entrega.</p>

        <p><strong>Condiciones para el cambio:</strong></p>
        <ul>
          <li>El producto debe estar en perfectas condiciones (entiéndase que el producto debe estar nuevo, sin uso alguno).</li>
          <li>Si el producto estuviera usado o dañado no se realizará ningún tipo de cambio.</li>
          <li>Asegúrate de incluir tu información de contacto en el cambio y, si fuera posible, un código de seguimiento del paquete.</li>
        </ul>

        <p><strong>Daños de transporte:</strong></p>
        <p>Si el producto se pierde o, al momento de recibirlo, notas que fue dañado durante el transporte, debes informarnos inmediatamente.</p>
        
        {/* Agregar información adicional sobre la política de cambio */}
      </div>

      <div className="como-comprar">
        <h2>Cómo Comprar</h2>
        <ol>
          <li>Ingresa en nuestro "SHOP", selecciona la categoría de productos y escoge directamente el artículo que desees.</li>
          <li>Visualiza el producto que te interesa. Encontrarás diferentes fotografías en donde podrás ver sus detalles.</li>
          <li>También te informaremos de otros productos relacionados.</li>
          <li>Selecciona un producto, sus variantes si corresponde y agrégalo al carrito de compras. Seguidamente, podrás escoger seguir comprando o realizar el pedido.</li>
          <li>Finaliza la compra y realiza el pago con los medios de pago que ofrecemos.</li>
          <li>Recibirás un correo electrónico confirmándote el pedido.</li>
        </ol>
      </div>
    </section>
  );
}

export default QuienesSomos;