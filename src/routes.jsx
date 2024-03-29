import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage";
import CartPage from "./pages/CartPage/CartPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NewsDetailPage from "./pages/NewsDetailPage/NewsDetailPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import RulesPage from "./pages/RulesPage/RulesPage";
import PrivatePolicyPage from "./pages/PrivatePolicyPage/PrivatePolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage/CookiePolicyPage";
import VisitsPage from "./pages/VisitsPage/VisitsPage";
import HistoryVisitsPage from "./pages/HistoryVisitsPage/HistoryVisitsPage";
import NewVisitPage from "./pages/NewVisitPage/NewVisitPage";
import VisitDetailsPage from "./pages/VisitDetailsPage/VisitDetailsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UserInformation from "./pages/ProfilePage/UserInformation";
import Orders from "./pages/ProfilePage/Orders";
import { RequireAuth } from "./components/RequireAuth";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/aktualnosci", element: <NewsPage /> },
      { path: "/aktualnosci/:id", element: <NewsDetailPage /> },
      { path: "/o-nas", element: <AboutUsPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/rejestracja", element: <RegisterPage /> },
      { path: "/profil", 
        element: (<RequireAuth><ProfilePage /></RequireAuth>), 
        children: [
        { path: "", element: <UserInformation /> },
        { path: "informacje", element: <UserInformation /> },
        { path: "zamowienia", element: <Orders /> },
        ] 
      },
      { path: "/przypomnienie-hasla", element: <ForgetPasswordPage /> },
      { path: "/reset-hasla", element: <ResetPasswordPage /> },
      { path: "/wizyty", element: (<RequireAuth><VisitsPage /></RequireAuth>) },
      { path: "/wizyty/nowa", element: (<RequireAuth><NewVisitPage /></RequireAuth>) },
      { path: "/wizyty/zarezerwowane", element: (<RequireAuth><VisitsPage /></RequireAuth>) },
      { path: "/wizyty/historia", element: (<RequireAuth><HistoryVisitsPage /></RequireAuth>) },
      { path: "/wizyty/historia/:id", element: (<RequireAuth><VisitDetailsPage /></RequireAuth>) },
      { path: "/koszyk", element: (<RequireAuth><CartPage /></RequireAuth>) },
      { path: "/kontakt", element: <ContactPage /> },
      { path: "/sklep", element: <ShopPage /> },
      { path: "/sklep/:category", element: <ShopPage /> },
      { path: "/sklep/produkty/:id", element: <ProductDetailPage /> },
      { path: "/regulamin", element: <RulesPage /> },
      { path: "/polityka-prywatnosci", element: <PrivatePolicyPage /> },
      { path: "/polityka-plikow-cookie", element: <CookiePolicyPage /> },
    ],
  },
]);
