import React from "react";
import './adsTop.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AdsTop = () => {
  return (
    <section className="adsTop adsTop-sticky">
      <div className="social-media">
        <a href="/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="physical-locations">
        <p>Visítanos en nuestras ubicaciones físicas:</p>
        <ul>
          <li>Sucursal 1: Dirección 1</li>
          <li>Sucursal 2: Dirección 2</li>
        </ul>
      </div>
    </section>
  );
};

export default AdsTop;
