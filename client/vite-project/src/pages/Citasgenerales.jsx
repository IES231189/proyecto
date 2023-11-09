import React from "react";
import Table from "../componentes/organizmo/Table";
import Button from "../componentes/atomos/button";
import { Link } from "react-router-dom";


const Citasgenerales=()=>{
    const nombre="Agregar Paciente";
    const Pacientes="Citas generales";
   
  
    const data = [
      { name: '', hours: 0, city: '', phone: '' }
       ];

    return ( 
     
    <div className="col-10 table">
       <Link to='/formulario'>
       <Button name={nombre}></Button>
       </Link> 
         <Table  data={data} name={Pacientes}></Table>

    </div>);
}

export default Citasgenerales;