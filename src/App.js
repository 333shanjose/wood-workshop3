
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';

import Popper from'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';




import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Landingpage from './Pages/Landingpage';
import About from './Pages/About';
import Service from './Pages/Service';
import Service2 from './Pages/Service2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service/>} />
        <Route path="/services-2" element={<Service2/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
