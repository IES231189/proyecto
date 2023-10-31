import React from "react";
import Table from "../componentes/organizmo/Table";
import Button from "../componentes/atomos/button";


const Hospitalizacion=()=>{
    const name="Hospitalizacion";
    const botonName="Agregar Paciente";
    const data = [
        { name: '', hours: 0, city: '', phone: '' }, 
      
      ];

    return(
        <div className="col-8">
           <Button name={botonName} ></Button>
           <Table row={data} name={name}></Table>
        </div>
        
    );
}; 

export default Hospitalizacion;