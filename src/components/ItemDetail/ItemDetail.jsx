import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0); 


  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      categoria: producto.category,
      imagen: producto.imageUrl,
     
    };
    console.log(item)
    addItem(item, quantity);
  };

  return (
    <section className='sectionDetail'>
      <div className='tituloCarrito'>
        <h3>Estas viendo: {producto.title} </h3>
      </div>

      <div className="ItemDetail">
        <img src={producto.imageUrl} alt={producto.title} />
        <h2>$ {producto.price}</h2>
        <p>Categoria: {producto.category}</p>
      </div>

      <div className='contador'>
        {quantityAdded > 0 ? (
          <section className='btns'>
          <Link to='/' className='finish btnSeguir'>Seguir Comprando</Link>

          </section>
        ) : (
          <ItemCount initial={1} stock={producto.stock} onAdd={handleOnAdd} />
        )}
      </div>
    </section>
  );
}

export default ItemDetail;