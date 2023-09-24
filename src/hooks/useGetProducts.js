import { useEffect, useState } from 'react';  // Asegúrate de importar useState aquí
import { useParams } from 'react-router-dom';  // Importa useParams desde react-router-dom
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const useGetProducts = (itemsRef) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();  

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, itemsRef);

    if (categoriaId) {
      const queryFilter = query(queryCollection, where('categoria', '==', categoriaId));

      getDocs(queryFilter)
        .then((products) => {
          const productsData = products.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }));

          setProductos(productsData);
        })
    } else {
      getDocs(queryCollection)
        .then((products) => {
          const productsData = products.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }));

          setProductos(productsData);
        })
    }
  }, [categoriaId, itemsRef]);

  return { productos };
};

export default useGetProducts;
