import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../componentes/organizmo/Sidebar"; 
import Calendario from "../pages/Calendario";
import Citasgenerales from "../pages/Citasgenerales";
import Controlembarazo from "../pages/Controlembarazo";
import Hospitalizacion from "../pages/Hospitalizacion";
import Pacientes from "../pages/Pacientes";

import Form from "../componentes/moleculas/Form";
import FormCE from "../componentes/moleculas/FormCE";
import FormHos from "../componentes/moleculas/FormHos";

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
                    <Route path="/formulario" element={<Form/>}/>
                    <Route path="/formulario-embarazo" element={<FormCE/>}/>
                    <Route path="/formulario-hospitalizacion" element={<FormHos/>}/>
                 </Routes>
    </Router>
  );
};

export default Rutas;
