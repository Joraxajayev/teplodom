import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Header/components/Navbar";
import Banner from "./pages/Homepage/components/banner/Banner";

import './scss/index.scss'
import NewProd from './pages/NewProduct/NewProd';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Banner/>
      <Routes>
        <Route path="/" element={<NewProd/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
