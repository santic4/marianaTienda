import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { collection,  getFirestore, query, onSnapshot } from 'firebase/firestore'; 
import Navbar from './components/NavBar/NavBar';
import AdsTop from './components/adsTop/adsTop';
import InicioImages from './components/InicioImages/InicioImages';
import AdminPanel from './components/AdminPanel/AdminPanel';
import BlusasCamisas from './components/BlusasCamisas/BlusasCamisas';
import Sweaters from './components/Sweaters/Sweaters';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
function App() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const q = query(productsCollection);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);

 
  return (
    <div className='app'>
      <BrowserRouter>
      <CartProvider>
        <AdsTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<InicioImages />} />
          <Route path="/admin" element={<AdminPanel  />} />
          <Route path="/BlusasCamisas" element={<BlusasCamisas products={products} />} />
          <Route path="/Sweaters" element={<Sweaters products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
