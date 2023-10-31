import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                   icon:"perm_identity",
                   text:"Pacientes",     
                   ruta: "/pacientes",
                },
        ];

    return(

        <div>
            <div className="sidebar col-4">
            
                     {iconos.map((icono , index) => (
                        
                                <NavLink  to={icono.ruta} key={index} >
                                        <SidebarItem icon={icono.icon} text={icono.text} />
                                </NavLink>             
                     ))}; 
              
            </div>

        </div>
    );

};

export default Sidebar;