import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';
import AdsTop from '../adsTop/adsTop';
import '../adsTop/adsTop.css'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
     
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
   
  };

 

  return (
    <div >
      <div>
    <AdsTop />
     </div>
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={!menuOpen && faBars} />
      </div>
      
      <div className="logo">
        <Link to="/">
          <img src='../img/LogoMain.jpeg' alt="Logo" />
        </Link>
      </div>

      <div className="cart-icon">
        
        <CartWidget className='textDeco'/>
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        {menuOpen && (
          <div className="close-menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        )}
        <li onClick={toggleMenu}><Link className='li' to="/">Inicio</Link></li>
        <li className="categorias-item">
          <div>
          <Link className='li' onClick={toggleMenu} to="/">Categorias</Link>
          </div>
          <ul className="sub-menu">
          <li><Link onClick={toggleMenu}  to="/BlusasCamisas">Blusas y Camisas</Link></li>
            <li><Link onClick={toggleMenu} to="/Sweaters">Sweaters</Link></li>
            <li><Link onClick={toggleMenu} to="/SacosCamperas">Sacos y camperas</Link></li>
            <li><Link onClick={toggleMenu} to="/Remeras">Remeras</Link></li>
            <li><Link onClick={toggleMenu} to="/Pantalones">Pantalones</Link></li>
            <li><Link onClick={toggleMenu} to="/Noche">Noche</Link></li>
            <li><Link onClick={toggleMenu} to="/Buzos">Buzos</Link></li>
            <li><Link onClick={toggleMenu} to="/TallesEspeciales">Talles Especiales</Link></li>
            <li><Link onClick={toggleMenu} to="/Outlet">Outlet</Link></li>
            
          </ul>
        </li>
        <li ><Link  className='li' onClick={toggleMenu} to="/QuienesSomos">Quiénes Somos</Link></li>
    
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;  
