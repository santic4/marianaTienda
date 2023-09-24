import React, { useEffect, useState } from 'react';
import './Buzos.css';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const Buzos = () => {
  const [lista, setLista] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const getLista = async () => {
      try {
        const q = query(collection(db, 'products'), where('category', '==', 'Buzos'));
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
        </div>
      ))}
    </div>
  );
};

export default Buzos;