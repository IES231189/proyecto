import React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
import SidebarItem from "../moleculas/SidebarItem";

const Sidebar = () =>{
        const iconos=[

                {
                  icon:"dashboard",
                  text:"Calendario",
                  ruta:"/calendario",
                },
                  
                {
                  icon:"medical_services",
                  text:"Citas generales",
                  ruta:"/citas-generales",
                },
                {
                  icon:"child_care",
                  text:"Control Embarazo" ,    
                  ruta: "/control-embarazo",
                },
                {
                  icon:"monitor_heart",
                  text:"Hospitalizacion",
                  ruta: "/hospitalizacion",                 
                },
                {
                   icon:"person",
                   text:"Pacientes",     
                   ruta: "/pacientes",
                }
        ];

    return(
            <div className="sidebar">
                     {iconos.map(icono=> (
                        <Router>
                                <Link to={icono.ruta}>
                                <SidebarItem icon={icono.icon} text={icono.text}/>
                        </Link>
                        </Router>
                        
                       
                     ))};    
            </div>
    );
};



export default Sidebar;