import { createContext, useEffect, useState } from "react";

export const ContextApp = createContext(null);

const Context = (props) => {
  const [cartItem, setCartItem] = useState([]);


  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItem(storedCartItems);
    }
  }, []);

  const addToCart = (dish) => {

    const findItem = cartItem.find((item) => item.id === dish.id)

    if(findItem){
      setCartItem((prev) => prev.map((item) =>
    item.id === dish.id ? item.count >=10 ? item : {...item , count : item.count + 1} : item
     ))
    } else {
      setCartItem((prev) => [...prev , {...dish , count :1 }])
    }

    const updatedCartItems = [...cartItem, { ...dish , count : 1 }];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };


  const clearCart = () => {
    localStorage.clear()
    setCartItem([])
  }

  const increment = (id)=> {
    setCartItem((prevCartItem) =>
    prevCartItem.map((item) => item.id === id ? item.count >= 10 ? item :  {...item , count : item.count + 1} : item
  ))
  localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }


  const decrement = (id)=> {
    setCartItem((prevCartItem) =>
    prevCartItem.map((item) => item.id === id ? item.count <= 1 ? item :  {...item , count : item.count - 1} : item
  ))
  localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }


  const removeItem = (id) => {
    const filteredCart = cartItem.filter((item) => item.id !== id);
    setCartItem(filteredCart);
    localStorage.setItem("cartItems", JSON.stringify(filteredCart));
  };

 

  const values = { addToCart, cartItem ,clearCart , increment , decrement , removeItem};


  return (
    <ContextApp.Provider value={values}>{props.children}</ContextApp.Provider>
  );
};

export default Context;