import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaPercent, FaShippingFast, FaLock, FaExchangeAlt} from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai';
import { FaClock } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsPersonCircle } from 'react-icons/bs';
const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <footer className='footer'>

      <Carousel className='carru'
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        emulateTouch={true}
        showThumbs={false}
        autoPlay={true} 
        interval={5000} 
        transitionTime={1000}
      >
        <div className="carousel-item">
          <div className="icon">
            <FaPercent />
            <p className='p1'>Descuentos</p>
            <p className='p2'>30% OFF en nuestros locales</p>
          </div>

          <div className="icon">
            <FaShippingFast />
            <p className='p1'>Envios a todo el pais</p>
            <p className='p2'>Envios con Correo Argentino</p>
          </div>

          <div className="icon">
            <FaLock />
            <p className='p1'>Pago seguro</p>
            <p className='p2'>Pago 100% asegurado</p>
          </div>

        </div>

        <div className="carousel-item">
          <div className="icon">
            <FaExchangeAlt />
            <p className='p1'>Cambios</p>
            <p className='p2'>Cambios unicamente por falla de fabrica</p>
          </div>

          <div className="icon">
            <FaClock />
            <p className='p1'>Atención</p>
            <p className='p2'>Lunes a Viernes - 8 a 18hs</p>
          </div>
     
          <div className="icon">
            <AiFillCreditCard />
            <p className='p1'>Tarjetas</p>
            <p className='p2'>3 cuotas sin interes en nuestros locales</p>
          </div>
        </div>
      
      </Carousel>
<section className='ContenedorLocales'>
<h2>Nuestros locales</h2>
      <div className='container-pie'>
      
  <div>
    <h3>Mitre 260</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23081.31796250225!2d-60.23714300646089!3d-33.33494530778917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7678dd51671ed%3A0x6b075216e9539214!2sBartolom%C3%A9%20Mitre%20260%2C%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1696213048728!5m2!1ses-419!2sar" width="200" height="200" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div>
    <h3>Francia 44</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.585379832637!2d-60.22033992350556!3d-33.329653491337424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7678c6dcd241b%3A0xf912092600542dd4!2smariana%20ropa!5e0!3m2!1ses-419!2sar!4v1696214690471!5m2!1ses-419!2sar" width="200" height="200" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div>
    <h3>Urquiza 61</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.5648438973885!2d-60.22117224362751!3d-33.330190212259126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7678c47e698b3%3A0x574abb511e140116!2sUrquiza%2061%2C%20B2900HNA%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1696214832005!5m2!1ses-419!2sar" width="200" height="200" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div>
    <h3>Mitre 189</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.567630176795!2d-60.221173923505454!3d-33.33011739136116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7678c40a3bea3%3A0x75b7794afbcf3130!2sGaler%C3%ADa%20Albor%2C%20Bartolom%C3%A9%20Mitre%20189%2C%20B2900ACC%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1696215886739!5m2!1ses-419!2sar" width="200" height="200" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>
</section>
      <div className='infContainer'>
       
         <Link className='textDeco' onClick={scrollToTop} to="/QuienesSomos"><h3>Terminos y condiciones</h3></Link>
         <Link className='textDeco' onClick={scrollToTop} to="/QuienesSomos"><h3>Preguntas frecuentes</h3></Link>
         <Link className='textDeco' onClick={scrollToTop} to="/QuienesSomos"><h3>Politicas de cambio</h3></Link>
         <Link className='textDeco' onClick={scrollToTop} to="/QuienesSomos"><h3>Como comprar</h3></Link>
         <Link className='textDeco' onClick={scrollToTop} to="/QuienesSomos"><h3>Contactanos</h3></Link>
         
       <div className='adsBtn'>
        <p>Copyright © 2023</p>
        <p className='p2p'>Todos los derechos reservados.</p>
        <p className='Admin'>
          <Link onClick={scrollToTop} to="/admin"><BsPersonCircle/></Link>
         </p>
       </div>
      </div>
    </footer>
  );
};

export default Footer;