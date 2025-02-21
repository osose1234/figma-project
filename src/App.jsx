import "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Solutions from "./Components/Solutions";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./styles/App.css";
import Sign from "./Pages/Sign";
import Footer from "./Components/Footer";
import Four from "./Components/Four";
import Product from "./Components/Product";
import Cheack from "./Components/Cheack";

import Subscribe from "./Components/Subscribe";
import BusinessProfile from "./Components/BusinessProfile";
import AdConversion from "./Components/AdConversion";

function App() {
  return (
    <Router>
      <Navbar />
      <AdConversion />
      <Four />
      <Product />
      <Routes>
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      <Solutions />
      <Cheack />
      <BusinessProfile />
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="/Newpage" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />{" "}
        <Route path="/Sign" element={<Sign />} />
      </Routes>
      <Subscribe />{" "}
      <Routes>
        <Route path="/Sign" element={<Sign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
