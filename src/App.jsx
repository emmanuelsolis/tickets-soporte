import { useState } from 'react'
import CrearTickets from './assets/pages/CrearTickets';
import Tickets from './assets/pages/Tickets';
import Tablero from './assets/pages/Tablero';
import MisTickets from './assets/pages/MisTickets';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Layout from './assets/pages/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div >
      
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/CrearTickets' element={<CrearTickets/>}> </Route>
        <Route path='/Tickets' element={<Tickets/>}> </Route>
        <Route path='/MisTickets' element={<MisTickets/>}> </Route>
        <Route path='/' element={<Tablero/>}> </Route>
        <Route path='*' element={<Tablero/>}> </Route>
        </Route>
      </Routes>
    </div>
    
    </div>
  )
}

export default App
