import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from "./view/Background";
import Header from './view/Header';
import Home from './view/Home/Home';
import About from './view/About/About';
import Product from './view/Product/Product';
import Contact from './view/Contact/Contact';
import Resource from "./view/Resource/Resource";
import Footer from "./view/Footer";
import DiphiloaboutWrapper from "./view/About/DiphiloaboutWrapper";


 
function App() {
  return (
    <>
      <Background/>
      <Router>
        <Header />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ve-chung-toi" element={<About />} />
            <Route path="/ve-chung-toi/:id" element={<DiphiloaboutWrapper />} />
            <Route path="/san-pham" element={<Product />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/tai-nguyen" element={<Resource />} />
          </Routes>
      
        <Footer/>
      </Router>
    </>
  );
}

export default App;
