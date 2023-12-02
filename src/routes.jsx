import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage/HomePage';
import NewsPage from './pages/NewsPage/NewsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage/ForgetPasswordPage';
import CartPage from './pages/CartPage/CartPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/aktualnosci', element: <NewsPage /> },
          { path: '/o-nas', element: <AboutUsPage /> },
          { path: '/login', element: <LoginPage /> },
          { path: '/rejestracja', element: <RegisterPage /> },
          { path: '/przypomnienie-hasla', element: <ForgetPasswordPage /> },
          { path: '/koszyk', element: <CartPage /> },
        //   { path: 'about', element: <AboutPage /> },
          // more nested routes here
        ],
      },
      // other top-level routes can be added here
    ]);