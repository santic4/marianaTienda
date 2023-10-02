import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { BsArrowBarRight, BsArrowBarLeft } from 'react-icons/bs';

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0); 
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Utiliza navigate(-1) para retroceder una página
    navigate(-1);
  };

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      color: producto.color,
      talle: producto.talle,
      peso: producto.peso,
      categoria: producto.category,
      imagen: producto.imageUrl,
      description: producto.description
    };
    console.log(item)
    addItem(item, quantity);
  };

  return (
    <section className='sectionDetail'>
      <div className='tituloCarrito'>
        <h3>Estas viendo: {producto.title} </h3>
      </div>
      <div className='contenedorBtnBack'>
      <button className='btnBack' onClick={handleGoBack}><BsArrowBarLeft/>Atras</button>
      </div>
      <div className="ItemDetail">
        <div>
        <img src={producto.imageUrl} alt={producto.title} />
        </div>
        <div className='DetailHijo'>
        <h2>{producto.title}</h2>
        <h2>$ {producto.price}</h2>
        <p>{producto.description}</p>
        <p>Talle: {producto.talle}</p>
        <p>Color: {producto.color}</p>
        <p>Peso: {producto.peso}</p>

        <div className='contador'>
        {quantityAdded > 0 ? (
          <section className='btns'>
          <Link to='/' className='finish btnSeguir'>Seguir Comprando</Link>
          <Link to='/cart' className='finish'>Ir al carrito</Link>
          </section>
        ) : (
          <ItemCount initial={1} stock={producto.stock} onAdd={handleOnAdd} />
        )}
        </div>

        </div>
 
      </div>

    </section>
  );
}

export default ItemDetail;