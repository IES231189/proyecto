import React from "react";
import Table from "../componentes/organizmo/Table";
import Button from "../componentes/atomos/button";

const Controlembarazo =()=>{

    const nombre="Control Embarazo";
    const name="Agregar Paciente";

    const data = [
        { name: '', hours: 0, city: '', phone: '' }, 
      
      ];

    return(
        <div className="col-8">
             <Button name={name}></Button>
             <Table data={data} name={nombre}/>
            
        </div>
        
    );
};

export default Controlembarazo;