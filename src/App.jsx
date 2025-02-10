import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Header/components/Navbar";
import Banner from "./pages/Homepage/components/banner/Banner";

import "./scss/index.scss";
import NewProd from "./pages/NewProduct/NewProd";

//layout
import HomeLayout from "./layouts/HomeLayout";
import MasterLayout from "./layouts/HomeLayout";

//pages
import Home from "./pages/Homepage/Home";
import Suppliers from "./pages/Suppliers/Suppliers";
import Sale from './pages/Sale/Sale';
import Contact from './pages/Contact/Contact';
import Withdrawal from './pages/Withdrawal/Withdrawal';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path="sale" element={<Sale />} />
            <Route path="newProd" element={<NewProd />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="withdrawal" element={<Withdrawal />} />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
