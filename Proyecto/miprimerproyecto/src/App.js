import './App.css';
import Home from './componentes/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import Contacto from './componentes/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route  path="/contacto" element={<Contacto />}/>
        <Route  path="/" element={<Home />}/>
      </Routes>


      </BrowserRouter> 
      <Footer/>
    </div>
  );

};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//       <Routes>
//           <Route  path="/" element={<Home />}/>
            
        
//           <Route  path="/contacto" element={<Contacto />}/>
            
          
//           <Route path="/grupos" element={<Grupos />}/>
//           </Routes>

//       </BrowserRouter>
//       <Footer />
//     </div>
//   )
// }

