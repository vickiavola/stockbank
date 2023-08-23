import { useState } from 'react';
import { Menu } from './Menu';
import { Login } from "./Login";
import { Solicitudpin } from "./Solicitudpin";

//import { Menu } from "./Menu";
import logo from "../img/stock_bank.svg";


export const CambiarPin = () => {

     // Leo el array de usuarios



     let users = localStorage.getItem('users');
     let usersList = JSON.parse(users);


     // establesco variables


     function cambiarPin (e) {
          e.preventDefault();
          var usuariocambiopin = document.getElementById("usuariocambiopin").value;
          var pinviejo = document.getElementById("pinviejo").value;
          var pinnuevo = document.getElementById("pinnuevo").value;

          



          console.log (usuariocambiopin);
          console.log (pinviejo);
          console.log (pinnuevo);
          console.log(usersList);

          // encontrando el usuario que es igual al logeado
          const findUser = usersList.find((user) => user.userName === usuariocambiopin)
          console.log(findUser.pin)

          if (pinviejo === findUser.pin) {



               console.log ("yes")
          }else{
               alert("Por favor ingrese el Pin viejo correctamente");
               document.getElementById("usuariocambiopin").value="";
               document.getElementById("pinviejo").value="";
               document.getElementById("pinnuevo").value="";
               document.getElementById("usuariocambiopin").focus();

          }

     }

     return (
          <div className ="container">
          <form id="form_cambiopin">
          <div>
               <img className= "logo-login" src={ logo } alt="logo"/>
               <p className="titulo-login">Aquí puedes cambiar tu pin: </p>
               <label htmlFor="usuario">Usuario: </label>
               <input type="text" id="usuariocambiopin"className="form-control"  required/>
               <label htmlFor="pinviejo">Pin Viejo: </label>
               <input type="password" id="pinviejo"className="form-control" required/>
               <label htmlFor="pinnuevo">Pin Nuevo: </label>
               <input type="password" id="pinnuevo"className="form-control" required/>
 
          </div>
          <br/>
          <input type="submit" className="btn btn-primary" value="Cambiar pin" onClick= {cambiarPin}  />

          </form>

     </div>
     )
}
