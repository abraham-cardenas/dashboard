import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar bg-blue">
      <ul>
        <li>
          <NavLink to="/" exact className="text-dark  rounded py-2 w-100  d-inline-block px-3" 
          activeClassname="active"><FaIcons.FaHome className="me-2" /> Principal </NavLink>
        </li>
        <li>
          <NavLink to="Usuarios" exact className="text-dark rounded py-2 w-100  d-inline-block px-3" 
          activeClassname="active"><FaIcons.FaUserPlus className="me-2" /> Usuarios </NavLink>
        </li>
        <li>
          <NavLink to="CreacionVehiculos" exact className="text-dark rounded py-2 w-100 d-inline-block  px-3" 
          activeClassname="active"><FaIcons.FaCarAlt className="me-2" />Creacion de Vehiculos</NavLink>
        </li>
        <li>
          <NavLink to="ReportesRutas" exact className="text-dark rounded py-2 w-100  d-inline-block px-3" 
          activeClassname="active"><FaIcons.FaReadme className="me-2" />Reportes de Rutas</NavLink>
        </li>
        <li>
          <NavLink to="Informes" exact className="text-dark rounded py-2 w-100  d-inline-block px-3" 
          activeClassname="active"> <FaIcons.FaAddressBook className="me-2" />Informes</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar