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
  };

  return (
    <div className='sticky'>
    <AdsTop />
    
    <nav className={`navbar ${menuOpen ? 'open sticky' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={!menuOpen && faBars} />
      </div>
      
      <div className="logo">
        <Link to="/">
          <img src="../img/logoPrincipal.jpeg" alt="Logo" />
        </Link>
      </div>

      <div className="cart-icon">
        <CartWidget/>
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        {menuOpen && (
          <div className="close-menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        )}
        <li><Link to="/">Inicio</Link></li>
        <li className="categorias-item">
          <Link to="/">Categorias</Link>
          <ul className="sub-menu">
          <li><Link to="/BlusasCamisas">Blusas y Camisas</Link></li>
            <li><Link to="/Sweaters">Sweaters</Link></li>
            <li><Link to="/SacosCamperas">Sacos y camperas</Link></li>
            <li><Link to="/Remeras">Remeras</Link></li>
            <li><Link to="/Pantalones">Pantalones</Link></li>
            <li><Link to="/Noche">Noche</Link></li>
            <li><Link to="/Buzos">Buzos</Link></li>
            <li><Link to="/Outlet">Outlet</Link></li>
            
          </ul>
        </li>
        <li><Link to="/QuienesSomos">Quiénes Somos</Link></li>
        <div className='Admin'>
      <Link to="/admin">Panel de Administrador</Link>
      </div>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;  
