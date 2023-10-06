import React, { useState } from 'react';
import './AdminPanel.css';
import { collection, addDoc, getFirestore, deleteDoc, doc } from 'firebase/firestore';
import useGetProducts from '../../hooks/useGetProducts';
import { getAuth, signOut } from 'firebase/auth'; 
import { AiTwotoneDelete } from 'react-icons/ai';
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
    window.location.reload();
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
    window.location.reload();
  
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
      
      <h2>Agregar Producto</h2>
      
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
        <div className='btnAdd'>
        <button type='submit'>Agregar Producto</button>
        </div>
      </form>
      </section>

      <div className='contenedor-hijo2'>

      <h2>Eliminar Producto</h2>

      <input
          type="text"
          placeholder="Buscar por nombre o ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       <ul className='ulDelete'>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.title} (ID: {product.id}) - <AiTwotoneDelete className='iconTresh' onClick={() => deleteProduct(product.id)}>Eliminar</AiTwotoneDelete>
            </li>
          ))}
        </ul>
    </div>
    </div>
    
    <section className='agregarImg'>
      <div>
       <strong>- Para agregar una imagen:</strong>
        <p>{'1) Entrar a postimages.org'}</p>
        <p>{'2) Selecciona tamaño 1600x1200 y la imagen'}</p>
        <p>{'3) Copiar el ENLACE DIRECTO y pegarlo en: URL de la Imagen'}</p>
      <br></br>

        <strong>{'- Los Precios y Peso de la prenda deben ser solo numeros ( sin $ )'}</strong>
        </div>
     
     <div>
      <br></br>
      <br></br>
     <strong>- Las Categorias deben escribirse estrictamente asi:</strong>
        <p>{'BlusasCamisas'}</p>
        <p>{'Sweaters'}</p>
        <p>{'Remeras'}</p>
        <p>{'Pantalones'}</p>
        <p>{'Noche'}</p>
        <p>{'Buzos'}</p>
        <p>{'TallesEspeciales'}</p>
        <p>{'Outlet'}</p>
     </div>
      </section>
      
    </section>
  );
};

export default AdminPanel;