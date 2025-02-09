import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Header/components/Navbar";
import Banner from "./pages/Homepage/components/banner/Banner";

import './scss/index.scss'
import NewProd from './pages/NewProduct/NewProd';

//layout
import HomeLayout from "./layouts/HomeLayout";

//pages
import Home from "./pages/Homepage/Home";



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="/" element={<NewProd/>}/>
          </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
