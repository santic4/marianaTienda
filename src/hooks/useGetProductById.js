import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const useGetProductById = (itemRef, idRef) => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, itemRef, idRef);

    getDoc(queryDoc)
      .then(res => setProducto({ id: res.id, ...res.data() }));
  }, [id, idRef, itemRef]); 

  return { producto };
};

export default useGetProductById;
