import React, { useState } from 'react';
import './AdminPanel.css';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

import { getAuth, signOut } from 'firebase/auth'; // Importar la función de cierre de sesión

const AdminPanel = () => {
  const [productData, setProductData] = useState({
    category: '',
    title: '',
    imageUrl: '',
    price: '',
    description: '',
  });

  // Manejar cambios en los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const { category, title, imageUrl, price, description } = productData;

    if (category && title && imageUrl && price && description) {
      try {
        const productsCollectionRef = collection(db, 'products');
        await addDoc(productsCollectionRef, {
          ...productData,
        });
      } catch (error) {
        console.error('Error al agregar el documento:', error);
      }

      setProductData({
        category: '',
        title: '',
        imageUrl: '',
        price: '',
        description: '',
      });
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
     
  };

  return (
   
    
    <div className='AdminPanel'>
      <h2>Panel de Administración</h2>
      <button onClick={handleSignOut}>Cerrar Sesión</button>
      <form onSubmit={handleSubmit}>
        <label>
          Categoría:
          <input
            type='text'
            name='category'
            value={productData.category}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Título:
          <input
            type='text'
            name='title'
            value={productData.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          URL de la imagen:
          <input
            type='text'
            name='imageUrl'
            value={productData.imageUrl}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Precio:
          <input
            type='text'
            name='price'
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descripción:
          <textarea
            name='description'
            value={productData.description}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Agregar Producto</button>
      </form>
    </div>
   
  );
};

export default AdminPanel;