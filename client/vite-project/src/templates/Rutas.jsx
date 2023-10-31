import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../componentes/organizmo/Sidebar"; // Asegúrate de importar tu Sidebar correctamente

import Calendario from "../pages/Calendario";
import Citasgenerales from "../pages/Citasgenerales";
import Controlembarazo from "../pages/Controlembarazo";
import Hospitalizacion from "../pages/Hospitalizacion";
import Pacientes from "../pages/Pacientes";

const Rutas = () => {
  return (
    <Router>
      <div className="col-">

                      <Sidebar />
         </div>                
                 <Routes>
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/citas-generales" element={<Citasgenerales/>}/>
                    <Route path="/control-embarazo" element={<Controlembarazo/>}/>
                    <Route path="/hospitalizacion" element={<Hospitalizacion/>}/>
                    <Route path="/pacientes" element={<Pacientes/>}/>
                 </Routes>
    </Router>
  );
};

export default Rutas;
