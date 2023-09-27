import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar sticky ${menuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
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
        <li>
          <Link to="/">Productos</Link>
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
        <li><Link to="/Quienes Somos">Quiénes Somos</Link></li>
        <div>
      <Link to="/admin">Panel de Administrador</Link>
      </div>
      </ul>
    </nav>
  );
}

export default Navbar;