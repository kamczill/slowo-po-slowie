import { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { CartProvider } from "./contexts/CartProvider";

function App() {
  const initializeCart = () => {
    const existingCart = localStorage.getItem('cart');
    if (!existingCart) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };
  
  useEffect(() => {
    initializeCart();
  }, []);

  return (
    <>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </>
  );
}

export default App;
