import Home from './Home';

import { useState } from "react";
import CrearTickets from "./CrearTickets";
import Tickets from "./Tickets";
import Tablero from "./Tablero";
import MisTickets from "./MisTickets";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";

import Usuarios from './Usuarios';
import AboutUs from './AboutUs';

function MenuLat() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/CrearTickets" element={<CrearTickets />}>
              {" "}
            </Route>
            <Route path="/Tickets" element={<Tickets />}>
              {" "}
            </Route>
            <Route path="/MisTickets" element={<MisTickets />}>
              {" "}
            </Route>
            <Route path="/Home" element={<Home />}>
              {" "}
            </Route>
            <Route path="/AboutUs" element={<AboutUs/>}>
              {" "}
            </Route>
            <Route path="/" element={<Tablero />}>
              {" "}
            </Route>
            <Route path="*" element={<Tablero />}>
              {" "}
            </Route>
            <Route path='/Usuarios' element={<Usuarios/>}>
              {" "}
            </Route>
          </Route>
        </Routes>
    </div>
  )
}
export default MenuLat