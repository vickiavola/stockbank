//import React from 'react';
import { Solicitudpin } from './Solicitudpin';

import { useState } from 'react';
import logo from "../img/stock_bank.svg";

export const Login = () => {

     const [prelogin, setPrelogin] = useState("false");

     const [nombre, setNombre] = useState("");
     const [apellido, setApellido] = useState("");
     const [usuario, setUsuario] = useState("");


     function preinicioSesion(e){
          e.preventDefault();
          var unombre = document.getElementById("unombre").value;
          var uapellido = document.getElementById("uapellido").value;
          var uusuario = document.getElementById("uusuario").value;



          
          if (unombre.length ===0 || uapellido.length ===0 || uusuario.length ===0){
               alert("Por favor ingrese su nombre, apellido y usuario");
          }else{
               if(unombre !=0 && uapellido !=0 && uusuario !=0){
                    setPrelogin("true");



                    document.getElementById("form_login").style.display = "none";
               }else{
                    setPrelogin("false");
                    alert("Por favor ingrese su nombre, apellido y usuario");
                    document.getElementById("unombre").value="";
                    document.getElementById("uapellido").value="";
                    document.getElementById("uusuario").value="";
                    document.getElementById("unombre").focus();
               }
          }



     }
     
return (
  

     <div className ="container">
          <form id="form_login">
          <div>
               <img className= "logo-login" src={ logo } alt="logo"/>
               <p className="titulo-login">Te damos la bienvenida a Stock Bank, tu lugar de inversión</p>
               <p className="titulo-login">LOGIN</p>
               <div className="datos-login">
               <label htmlFor="nombre" className="tipo_dato" >Nombre: </label>
               <input type="text" id="unombre"className="form-control" onChange={ (e)=> setNombre(e.target.value) } required/>
               </div>
          </div>
          <div>
          <div className="datos-login">
               <label htmlFor="apellido" className="tipo_dato">Apellido: </label>
               <input type="text" id="uapellido" className="form-control"  onChange={ (e)=> setApellido(e.target.value) }required/>
               </div>
          </div>
          <div>
               <div className="datos-login">
               <label htmlFor="usuario"className="tipo_dato">Usuario: </label>
               <input type="text" id="uusuario" className="form-control"  onChange={ (e)=> setUsuario(e.target.value) }required/>
               </div>
          </div>

          <br/>
          <input type="submit" className="btn-primary" value="Login" onClick= {preinicioSesion}/>


          </form>

     { prelogin === "true" && <Solicitudpin u={usuario} /> }

     </div>
     )
}

