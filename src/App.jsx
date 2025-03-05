import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./scss/index.scss";

// Layout
import MasterLayout from "./layouts/HomeLayout";

// Mavjud sahifalar
import Home from "./pages/Homepage/Home";
import Suppliers from "./pages/Suppliers/Suppliers";
import Sale from "./pages/Sale/Sale";
import Contact from "./pages/Contact/Contact";
import Withdrawal from "./pages/Withdrawal/Withdrawal";
import AllCategory from "./pages/AllCategory/AllCategory";
import LikesProduct from "./features/likeProduct/LikesProduct";
import BasketProduct from "./pages/Basket/BasketProduct";
import NewProd from "./pages/NewProduct/NewProd";

// Yangi sahifalar (Login va Register)
import LoginForm from "./pages/profile/LoginForm";
import RegisterForm from "./pages/profile/RegisterForm";
import ProfilePage from "./pages/profile/ProfilePage";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Home />} />
          <Route path="allCategory" element={<AllCategory />} />
          <Route path="sale" element={<Sale />} />
          <Route path="newProd" element={<NewProd />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="likes" element={<LikesProduct />} />
          <Route path="basket" element={<BasketProduct />} />
          {/* Yangi yo'nalishlar */}
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="products/:id" element={<ProductDetail />} />
          {/* Topilmagan sahifa uchun */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
