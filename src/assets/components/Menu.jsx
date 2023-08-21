//import React from 'react';
import { useState } from 'react';
import { CambiarPin } from "./Cambiarpin";
import { Comprar } from "./Comprar";
import { Depositar } from "./Depositar";
import { Estado } from "./Estado";
import { Revisar} from "./Revisar";
import { Vender } from "./Vender";
import { NavLink } from "react-router-dom";


export const Menu = () => {
  const [cambiarPin, setCambiarpin] = useState("");
  const [revisar, setRevisar] = useState("");
  const [comprar, setComprar] = useState("");
  const [vender, setVender] = useState("");
  const [depositar, setDepositar] = useState("");
  const [estado, setEstado] = useState("");



  function cerrarSesion(){
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
   }


   function op_cambiarPin(){
    setCambiarpin("1");
    setRevisar("0");
    setComprar("0");
    setVender("0");
    setDepositar("0");
    setEstado("0");
  }

   function op_revisar(){
    setCambiarpin("0");
    setRevisar("1");
    setComprar("0");
    setVender("0");
    setDepositar("0");
    setEstado("0");
  }

  function op_comprar(){
    setCambiarpin("0");
    setRevisar("0");
    setComprar("1");
    setVender("0");
    setDepositar("0");
    setEstado("0");
  }


  function op_vender(){
    setCambiarpin("0");
    setRevisar("0");
    setComprar("0");
    setVender("1");
    setDepositar("0");
    setEstado("0");
  }

  function op_depositar(){
    setCambiarpin("0");
    setRevisar("0");
    setComprar("0");
    setVender("o");
    setDepositar("1");
    setEstado("0");
  }

  function op_estado(){
    setCambiarpin("0");
    setRevisar("0");
    setComprar("0");
    setVender("o");
    setDepositar("0");
    setEstado("1");
  }


  

return (

     <>
        
     <div id="caja_menu">

     <p className="nombre-usuario">
    
     </p>
               
     <nav className="">
       <div className="">

         <label className="titulo-1" href=" ">Menú Principal</label>
         
         <div className="" id="navbarNavAltMarkup">
           <div className="navbar-nav">
             <NavLink to="" className="nav-link" onClick={ op_cambiarPin } >Cambiar PIN</NavLink>
             <NavLink to="" className="nav-link" onClick={ op_revisar} >Revisar acciones</NavLink>
             <NavLink to="" className="nav-link" onClick={ op_comprar } >Comprar acciones</NavLink>
             <NavLink to="" className="nav-link" onClick={ op_vender} >Vender acciones</NavLink>
             <NavLink to="" className="nav-link" onClick={ op_depositar } >Depositar fondos</NavLink>
             <NavLink to="" className="nav-link" onClick={ op_estado } >Generar estado de cuenta</NavLink>
             <a className="nav-link-finalizar"   href=" "  onClick={ cerrarSesion } >Finalizar Sesión</a>
           </div>
         </div>
       </div>
     </nav>
   </div>

    { cambiarPin === "1" && <CambiarPin/> }
    { revisar === "1" && <Revisar/> }
    { comprar=== "1" && <Comprar/>}
    { vender === "1" && <Vender/> }
    { depositar === "1" && <Depositar/> }
    { estado === "1" && <Estado/> }

 </>
   

     )
}