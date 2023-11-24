import React from "react";
import Table from "../componentes/organizmo/Table";
import Button from "../componentes/atomos/button";
import { Link } from "react-router-dom";

const Controlembarazo =()=>{

    const nombre="Control embarazo";
    const name="Agregar Paciente";

    const data = [
        { name: '', hours: 0, city: '', phone: '' }
         ];

    return(
        <div className="col-10">
           <Link to='/formulario-embarazo'>
             <Button name={name}></Button>  
           </Link> 
             <Table name={nombre} data={data} />
            
        </div>
        
    );
};

export default Controlembarazo;