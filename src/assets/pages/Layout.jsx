import { Outlet,NavLink } from "react-router-dom"
const Layout = () =>{
    return <div className="bdy">
        <div className='container'>
        <div id='user'>
        <span class="material-symbols-outlined">
account_circle
</span>
        <p>User</p>
      </div>
      <hr />
        <nav>
            <ul>
                <li>
                    <NavLink end to="/" className={"text"}>Tablero</NavLink>
                </li>
                <li>
                    <NavLink to="/Tickets" className={"text"}>Tickets</NavLink>
                </li>
                <li>
                    <NavLink to="/MisTickets" className={"text"}>Mis Tickets</NavLink>
                </li>
                <li>
                    <NavLink to="/CrearTickets" className={"text"}>Crear Tickets</NavLink>
                </li>
                <li>
                <NavLink to="/Home" className={"text"}>Home</NavLink>
                </li>
            </ul>
        </nav>
        
        </div>
        <Outlet className={"page"}></Outlet>
    </div>
}

export default Layout;