import React, { useEffect, useState } from 'react';
import './Outlet.css';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const Outlet = ({ products }) => {
  const [lista, setLista] = useState([]);
  const db = getFirestore();
  
  useEffect(() => {
    const getLista = async () => {
      try {
        const q = query(collection(db, 'products'), where('category', '==', 'Outlet'));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
      } catch (error) {
        console.error(error);
      }
    };

    getLista();
  }, []);

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