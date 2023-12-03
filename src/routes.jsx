import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage/HomePage';
import NewsPage from './pages/NewsPage/NewsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage/ForgetPasswordPage';
import CartPage from './pages/CartPage/CartPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NewsDetailPage from './pages/NewsDetailPage/NewsDetailPage';
import ShopPage from './pages/ShopPage/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/aktualnosci', element: <NewsPage /> },
          { path: '/aktualnosci/:id', element: <NewsDetailPage /> },
          { path: '/o-nas', element: <AboutUsPage /> },
          { path: '/login', element: <LoginPage /> },
          { path: '/rejestracja', element: <RegisterPage /> },
          { path: '/przypomnienie-hasla', element: <ForgetPasswordPage /> },
          { path: '/koszyk', element: <CartPage /> },
          { path: '/kontakt', element: <ContactPage /> },
          { path: '/sklep', element: <ShopPage /> },
          { path: '/sklep/:category', element: <ShopPage /> },
          { path: '/sklep/produkty/:id', element: <ProductDetailPage /> },
        //   { path: 'about', element: <AboutPage /> },
          // more nested routes here
        ],
      },
      // other top-level routes can be added here
    ]);