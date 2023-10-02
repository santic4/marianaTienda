import React, { createContext, useState, useEffect} from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Cargar productos del localStorage cuando el componente se monte
    const cartFromStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartFromStorage) {
      setCart(cartFromStorage);
    }
  }, []);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const updatedCart = [...cart, { ...item, quantity }];
      setCart(updatedCart);

      // Guardar el carrito en el localStorage cuando se agregue un producto
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      console.error('El producto ya fue agregado');
    }
  };
  const removeItem = (itemId) => {
    const cartUpdate = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdate);

    // Actualizar el localStorage cuando se elimine un producto
    localStorage.setItem('cart', JSON.stringify(cartUpdate));
  };
   const clearCart = () => {
    setCart([]);
    
    // Limpiar el localStorage cuando se limpie el carrito
    localStorage.removeItem('cart');
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  const cartQuantity = () => {
    return cart.reduce((acc,item)=> acc + item.quantity, 0)
  }

  function addBuyer(emailValue, provinceValue, countryValue, postalCodeValue, phoneValue, apartmentValue, nameValue, addressValue, cart, setOrderId, setBuyerInfo, nameCollection) {

    const newBuyer = {
      email: emailValue,
      name: nameValue,
      address: addressValue,
      province: provinceValue,
      country: countryValue,
      postalCode: postalCodeValue, 
      phone: phoneValue,
      apartment: apartmentValue,
      items: cart.map(item => ({
        id: item.id,
        nombre: item.title,
        peso: item.peso,
        color: item.color,
        talle: item.talle,
        precio: item.price,
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
  const total = cart.reduce((total, prod) => total + prod.quantity * prod.price, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total, addBuyer, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
