

import Home from './assets/pages/Home';

import { useState } from "react";
import CrearTickets from "./assets/pages/CrearTickets";
import Tickets from "./assets/pages/Tickets";
import Tablero from "./assets/pages/Tablero";
import MisTickets from "./assets/pages/MisTickets";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./assets/pages/Layout";
import Navbar from "./componentes/navbar/NavBar.jsx";
import Footer from "./componentes/footer/Footer";
import Usuarios from './assets/pages/Usuarios';
import AboutUs from './assets/pages/AboutUs';
import MenuLat from './assets/pages/MenuLat';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

    <div >
      

      <div>
        
            <Navbar />
            <MenuLat/>
            <Footer/>
      </div>

      </div>
  


</div>)}
export default App;