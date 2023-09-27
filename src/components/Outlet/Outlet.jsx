import React, { useEffect, useState } from 'react';
import './Outlet.css';
import { Link } from 'react-router-dom';

const Outlet = ({ products }) => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    // Verifica si products tiene datos antes de establecer la lista
    if (products.length > 0) {
      // En lugar de obtener los productos aquí, accede a la lista desde las props
      setLista(products);
    }
  }, [products]);

  return (
    <div className='container'>
      {lista.map((list) => (
        <div className='card' key={list.id}>
          <div className='card-body'>
            <p className='card-title'>Nombre: {list.title}</p>
            <p className='card-category'>Categoría: {list.category}</p>
            <p className='card-description'>Descripción: {list.description}</p>
            <img className='card-img' src={list.imageUrl} alt={list.title} />
            <p className='card-price'>Precio: {list.price}</p>
          </div>
          <Link to={`/item/${list.id}`}>
            <button>Ver Más</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Outlet;