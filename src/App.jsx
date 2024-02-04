import { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { CartProvider } from "./contexts/CartProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./contexts/authProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

function App() {
  
  useEffect(() => {
    const initializeCart = () => {
      const existingCart = localStorage.getItem('cart');
      if (!existingCart) {
        localStorage.setItem('cart', JSON.stringify([]));
      }
    };
    initializeCart();
  }, []);

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
