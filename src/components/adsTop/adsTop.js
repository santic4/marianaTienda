import React from "react";
import './adsTop.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsBalloonHeartFill } from 'react-icons/bs';
import {
  faFacebook,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

const AdsTop = () => {
  return (
    <div>
    <section className="adsTop">
      <div className="social-media">
        <a href="https://www.instagram.com/marianaropa_ok/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/mariana1979c/?locale=es_LA" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.tiktok.com/@marianaropa_ok?lang=es" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      <div className="physical-locations">
        <p>Visítanos en nuestras ubicaciones físicas</p>
        <ul>
          <li>San Nicolás de los Arroyos, Bs As </li>
          <li>Francia 44 · Mitre 189 ·  Mitre 260 · Urquiza 61</li>
        
        </ul>
      </div>
     
    </section>
     <div className='titulo-container'>
     <h1> BIENVENIDOS A MI PAGINA WEB <BsBalloonHeartFill className="icon-heart"/> </h1>
   </div>
   </div>
  );
};

export default AdsTop;
