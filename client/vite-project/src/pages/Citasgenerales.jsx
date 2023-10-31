import React from "react";
import Table from "../componentes/organizmo/Table";
import Button from "../componentes/atomos/button";


const Citasgenerales=()=>{
    const nombre="Agregar Paciente";
    const Pacientes="Pacientes";
    const columns = [
      { title: 'Nombre', field: 'name' },
      { title:'Apellido' , File:'lastname'},
      { title: 'Hora', field: 'hours' },
      { title: 'Fecha', field: 'city' },
      { title: 'Telefono', field: 'phone' },
    ];
  
    const data = [
      { name: '', hours: 0, city: '', phone: '' }, 
    
    ];
    return ( 
     
    <div className="col-8 table">
       <Button name={nombre}></Button>
         <Table columna={columns} row={data} name={Pacientes}></Table>

    </div>);
}

export default Citasgenerales;