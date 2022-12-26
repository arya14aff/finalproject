import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import Userprofile from './pages/Userprofile';
import Layanan from './pages/Layanan';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/profile" element={<Userprofile/>} />
      <Route path="/layanan" element={<Layanan/>} />
    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
