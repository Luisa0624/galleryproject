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
      <Routes>
        <Route path="/EdSheran" Component={EdSheeran}/>
        <Route path="/HaAsh" Component={HaAsh}/>
        <Route path="/JesseJoy" Component={JesseJoy}/>
        <Route path="/Kudai" Component={Kudai}/>
        <Route path="/Mana" Component={Mana}/>
        <Route path="/Marron5" Component={Marron5}/>
        <Route path="/Natalia" Component={Natalia}/>
        <Route path="/Oreja" Component={Oreja}/>
        <Route path="/OV7" Component={OV7}/>
        <Route path="/Rbd" Component={Rbd}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
