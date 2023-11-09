import React from "react";
import Table from "../componentes/organizmo/Table";
import Button from "../componentes/atomos/button";
import { Link } from "react-router-dom";


const Hospitalizacion=()=>{
    const name="Hospitalización";
    const botonName="Agregar Paciente";

    const data = [
        { name: '', hours: 0 , city: '', phone: '' }, 
      
    ];

    return(
        <div className="col-10">
           <Link to='/formulario-hospitalizacion'>
           <Button name={botonName} ></Button>
           </Link> 
           <Table data={data} name={name}></Table>
        </div>
        
    );
}; 

export default Hospitalizacion;