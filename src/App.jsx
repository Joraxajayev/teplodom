import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./features/header/components/Navbar";
import NewProd from "./pages/NewProd";
import Banner from "./features/banner/Banner";


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
