import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EdSheeran from './components/EdSheeran';
import HaAsh from './components/HaAsh';
import JesseJoy from './components/JesseJoy';
import Kudai from './components/Kudai';
import Mana from './components/Mana';
import Marron5 from './components/Marron5';
import Natalia from './components/NataliaJimenez';
import Oreja from './components/OrejadeVanGogh';
import OV7 from './components/Ov7';
import Rbd from './components/Rbd';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
       <div className='container'>
        <h1 id="title" className='text-center my-3'>Galería</h1>
      </div>
      <Routes>
        <Route path="/EdSheran" element={<EdSheeran className="image-size" />}/>
        <Route path="/HaAsh" element={<HaAsh className="image-size" />}/>
        <Route path="/JesseJoy" element={<JesseJoy className="image-size" />}/>
        <Route path="/Kudai" element={<Kudai className="image-size" />}/>
        <Route path="/Mana" element={<Mana className="image-size" />}/>
        <Route path="/Marron5" element={<Marron5 className="image-size" />}/>
        <Route path="/Natalia" element={<Natalia className="image-size" />}/>
        <Route path="/Oreja" element={<Oreja className="image-size" />}/>
        <Route path="/OV7" element={<OV7 className="image-size" />}/>
        <Route path="/Rbd" element={<Rbd className="image-size" />}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
