import React, { useState } from 'react';
import './AdminPanel.css';
import { collection, addDoc, getFirestore, deleteDoc, doc } from 'firebase/firestore';
import useGetProducts from '../../hooks/useGetProducts';
import { getAuth, signOut } from 'firebase/auth'; 

const AdminPanel = () => {

  /*AGREGAR PRODUCTOS*/

  const [productData, setProductData] = useState({
    category: '',
    title: '',
    imageUrl: '',
    peso: '',
    talle: '',
    color: '',
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
    const { category, talle, color, peso, title, imageUrl, price, description } = productData;

    if (talle && color && peso && category && title && imageUrl && price && description) {
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
        color: '',
        talle: '',
        peso: '',
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

  /*ELIMINAR PRODUCTOS*/
  const { productos } = useGetProducts('products'); // Reemplaza 'products' con el nombre real de tu colección

  // Función para eliminar un producto por su ID
  const deleteProduct = async (productId) => {
    const db = getFirestore();
    const productRef = doc(db, 'products', productId);

    try {
      await deleteDoc(productRef);
      console.log('Producto eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productos.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.id.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
   
    <section className='contendorPanel'>

      <h1>Panel de Administración</h1>

      <button className='btn' onClick={handleSignOut}>Cerrar Sesión</button>

    <div className='AdminPanel'>

     <section className='contenedor-hijo1'>
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
          Peso:
          <input
            type='text'
            name='peso'
            value={productData.peso}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Color:
          <input
            type='text'
            name='color'
            value={productData.color}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Talle:
          <input
            type='text'
            name='talle'
            value={productData.talle}
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
      </section>

      <div className='contenedor-hijo2'>

      <input
          type="text"
          placeholder="Buscar por nombre o ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.title} (ID: {product.id}) - <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
    </div>
    </div>

    </section>
  );
};

export default AdminPanel;