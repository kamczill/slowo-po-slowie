import { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";

function App() {
  const [count, setCount] = useState(0);

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
