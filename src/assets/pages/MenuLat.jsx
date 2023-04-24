import Home from '../../assets/pages/Home';

import CrearTickets from "../../assets/pages/CrearTickets";
import Tickets from "../../assets/pages/Tickets";
import Tablero from "../../assets/pages/Tablero";
import MisTickets from "../../assets/pages/MisTickets";
import { Route, Routes } from "react-router-dom";

import Layout from "../../assets/pages/Layout";

import Usuarios from '../../assets/pages/Usuarios';
import AboutUs from '../../assets/pages/AboutUs';

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