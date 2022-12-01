import './index.css';
import Home from './componentes/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import Contacto from './componentes/Contacto/Contacto';
import PreguntasFrecuentes from './componentes/Preguntas/Preguntas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route  path="/contacto" element={<Contacto />}/>
        <Route  path="/" element={<Home />}/>
        <Route  path="/faq" element={<PreguntasFrecuentes />}/>
      </Routes>


      </BrowserRouter> 
      <Footer/>
    </div>
  );

};

export default App;

