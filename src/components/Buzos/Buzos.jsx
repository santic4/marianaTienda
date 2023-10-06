import React, { useEffect, useState } from 'react';
import './Buzos.css';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { HiShoppingBag } from 'react-icons/hi';
import { MdDoubleArrow } from 'react-icons/md';

const Buzos = ({ products }) => {
  const [lista, setLista] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);
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

  const handleFiltroNombreChange = (event) => {
    const nuevoFiltro = event.target.value;
    setFiltroNombre(nuevoFiltro);

    // Aplica el filtrado sobre la lista original
    const resultados = lista.filter((item) =>
      item.title.toLowerCase().includes(nuevoFiltro.toLowerCase())
    );
    setResultadosFiltrados(resultados);
  };

  return (
    <section>
      <div className='h1Category'>
      <h1>INICIO <MdDoubleArrow />BUZOS</h1>
      </div>

     <div className='sectionFiltrar'>
 
  <input
    type="text"
    placeholder="Escribe el nombre del producto..."
    value={filtroNombre}
    onChange={handleFiltroNombreChange}
  />
</div>
   
    <div className='container'>
    {(resultadosFiltrados.length > 0 ? resultadosFiltrados : lista).map((list) => (
        <div className='card' key={list.id}>
          <div className='card-body'>
          <Link to={`/item/${list.id}`}>
            <img className='card-img' src={list.imageUrl} alt={list.title} />
            <HiShoppingBag className='iconsCartDetail' />
          </Link>
          <div className='descriptionCard'>
            <h3 className='card-title'>{list.title}</h3>
            <h3 className='card-price'>${list.price}</h3>
            </div>
           
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Buzos;