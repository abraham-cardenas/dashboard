import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavbarNav from './components/NavbarNav';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import CreacionVehiculos from './pages/Creacionvehiculos'
import ReportesRutas from './pages/ReportesRutas'
import Informes from './pages/Informes'
import './App.scss';


function App() {
  return (
    <div className='app'>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <NavbarNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Usuarios' element={<Usuarios />} />
            <Route path='CreacionVehiculos' element={<CreacionVehiculos />} />
            <Route path='ReportesRutas' element={<ReportesRutas />} />
            <Route path='Informes' element={<Informes />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}
export default App;

