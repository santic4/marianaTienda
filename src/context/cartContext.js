import React, { createContext, useState} from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  const cartQuantity = () => {
    return cart.reduce((acc,item)=> acc + item.quantity, 0)
  }

  function addBuyer(emailValue, nameValue, addressValue, cart, setOrderId, setBuyerInfo, nameCollection) {
    const newBuyer = {
      email: emailValue,
      name: nameValue,
      address: addressValue,
      items: cart.map(item => ({
        id: item.id,
        nombre: item.nombre,
        marca: item.marca,
        precio: item.precio,
        cantidad: item.quantity
      }))
    };
  
    const db = getFirestore();
    const collectionRef = collection(db, nameCollection);
  
    addDoc(collectionRef, newBuyer).then(({ id }) => {
      setOrderId(id);
      setBuyerInfo(newBuyer);
    });
  }

  const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);
  const total = cart.reduce((total, prod) => total + prod.quantity * prod.precio, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total, addBuyer, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
