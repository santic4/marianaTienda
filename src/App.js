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
import Outlet from './components/Outlet/Outlet';
import Pantalones from './components/Pantalones/Pantalones';
import Remeras from './components/Remeras/Remeras';
import Noche from './components/Noche/Noche';
import SacosCamperas from './components/SacosCamperas/SacosCamperas'
import Buzos from './components/Buzos/Buzos'
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Login from './components/Login/Login';

import { CartProvider } from './context/cartContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from './firebase/firebase';
import ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';

const auth = getAuth(appFirebase)

function App() {

  //Productos
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

  //Login
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })

 
  return (
    <div className='app'>
      <BrowserRouter>
      <CartProvider>
        <AdsTop />
        <Navbar />
        
        <Routes>
  <Route path="/" element={<InicioImages />} />
  <Route path="/BlusasCamisas" element={<BlusasCamisas products={products} />} />
  <Route path="/Sweaters" element={<Sweaters products={products} />} />
  <Route path="/Remeras" element={<Remeras products={products} />} />
  <Route path="/Pantalones" element={<Pantalones products={products} />} />
  <Route path="/SacosCamperas" element={<SacosCamperas products={products} />} />
  <Route path="/Noche" element={<Noche products={products} />} />
  <Route path="/Buzos" element={<Buzos products={products} />} />
  <Route path="/Outlet" element={<Outlet products={products} />} />
  <Route path="/item/:id" element={<ItemDetailContainer />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route
    path="/admin"
    element={usuario ? <AdminPanel correoUsuario={usuario.email} /> : <Login />}
  />
</Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

