import React from "react";
import Button from "../componentes/atomos/button";
import Table from "../componentes/organizmo/Table";

const Pacientes=()=>{
    const button="Agregar paciente";
    const name="Pacientes";
    
    const data = [
        { name: '', hours: 0, city: '', phone: '' }
         ];
  

    return (

        <div className="col-10">
              <Button name={button}/>
              <Table name={name} data={data} />
        </div>
     
    
    );
};

export default Pacientes;