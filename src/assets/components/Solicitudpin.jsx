import { useState } from 'react';
import { Menu } from './Menu';
import { Login } from "./Login";
//import { Menu } from "./Menu";
import logo from "../img/stock_bank.svg";


export const Solicitudpin = (props) => {

     const [login, setLogin] = useState("false");
     const [pin, setPin] = useState("");


     function inicioSesion(e){
          e.preventDefault();
          var upin = document.getElementById("upin").value;
          

          if (upin.length ===0){
               alert("Por favor ingrese su PIN para continuar");
          }else{
               if(upin !=0){
                    setLogin("true");
                    document.getElementById("form_solicitudpin").style.display = "none";
               }else{
                    setLogin("false");
                    alert("Por favor ingrese su PIN para continuar");
                    document.getElementById("upin").value="";
                    document.getElementById("upin").focus();
               }
          }

     }


     return (
  
          <div className ="container">
          <form id="form_solicitudpin">
          <div>
               <img className= "logo-login" src={ logo } alt="logo"/>
               <p className="titulo-login">Hola, { props.u } Ingresa tu PIN para continuar </p>
               <label htmlFor="pin">Pin: </label>
               <input type="number" id="upin"className="form-control" onChange={ (e)=> setPin(e.target.value) } required/>
          </div>
          <br/>
          <input type="submit" className="btn btn-primary" value="Login" onClick= {inicioSesion}/>

          </form>

     { login === "true" && <Menu/> }

     </div>
     )
}