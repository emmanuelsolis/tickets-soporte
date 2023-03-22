import { Outlet,NavLink } from "react-router-dom"
const Layout = () =>{
    return <div className="bdy">
        <div className='container'>
        <div id='user'>
        <p>User</p>
      </div>
      <hr />
        <nav>
            <ul>
                <li>
                    <NavLink end to="/">Tablero</NavLink>
                </li>
                <li>
                    <NavLink to="/Tickets">Tickets</NavLink>
                </li>
                <li>
                    <NavLink to="/MisTickets">Mis Tickets</NavLink>
                </li>
                <li>
                    <NavLink to="/CrearTickets">Crear Tickets</NavLink>
                </li>
                 <li>
                    <NavLink to="/EnvioMensajes">Envio Mensajes</NavLink>
                </li>
            </ul>
        </nav>
        
        </div>
        <Outlet></Outlet>
    </div>
}

export default Layout;