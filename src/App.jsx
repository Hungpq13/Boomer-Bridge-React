import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from "./view/Background";
import Header from './view/Header';
import Home from './view/Home/Home';
import About from './view/About/About';
import DigitalLearningPhilosophy from "./view/About/DigitalLearningPhilosophy";
import Product from './view/Product/Product';
import Contact from './view/Contact/Contact';
import Resource from "./view/Resource/Resource";
import Footer from "./view/Footer";
import DiphiloaboutWrapper from "./view/About/DiphiloaboutWrapper";
import Game from "./view/Product/Game";
import Construct from "./view/Product/Construct";

 
function App() {
  return (
    <>
      <Background/>
      <Router>
        <Header />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ve-chung-toi/gioi-thieu-thanh-vien" element={<About />} />
            <Route path="ve-chung-toi/gioi-thieu-thanh-vien/:id" element={<DiphiloaboutWrapper />} />
            <Route path="ve-chung-toi/triet-ly-hoc-dai-so" element={<DigitalLearningPhilosophy />} />
            <Route path="/san-pham/video" element={<Product />} />
             <Route path="/san-pham/bai-thuyet-trinh" element={<Construct />} />
              <Route path="/san-pham/game" element={<Game />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/tai-nguyen" element={<Resource />} />
          </Routes>
      
        <Footer/>
      </Router>
    </>
  );
}

export default App;
