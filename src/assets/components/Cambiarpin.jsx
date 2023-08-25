import { useState } from 'react';
import { Menu } from './Menu';
import { Login } from "./Login";
import { Solicitudpin } from "./Solicitudpin";

//import { Menu } from "./Menu";
import logo from "../img/stock_bank.svg";

     // Leo el array de usuarios





export function CambiarPin (e) {
     e.preventDefault();
     var usuariocambiopin = document.getElementById("usuariocambiopin").value;
     var pinviejo = document.getElementById("pinviejo").value;
     var pinnuevo = document.getElementById("pinnuevo").value;

     const obtenerUsuarios = () => {
          let users = localStorage.getItem('users');
          if(datos) {
               return JSON.parse(users);
          }else{
               return [];
          }
          }

     
     const [usuarios, setUsuarios] = useState(obtenerUsuarios());

     const findUser = usersList.find((user) => user.userName === usuariocambiopin)


          

     function handlePin (usersList ) {
          const findUser = usersList.map(() => user.userName === usuariocambiopin)
          if (pinviejo === findUser.pin && usuariocambiopin === findUser.userName){
               return findUser.pin === pinnuevo
          }else {
          alert("Por favor ingrese el usurio y el Pin viejo correctamente");
          document.getElementById("usuariocambiopin").value="";
          document.getElementById("pinviejo").value="";
          document.getElementById("pinnuevo").value="";
          document.getElementById("usuariocambiopin").focus();

     }



     setPinn(handlePin);








/*     // establesco variables
     function cambiarPin (e) {
          e.preventDefault();
          var usuariocambiopin = document.getElementById("usuariocambiopin").value;
          var pinviejo = document.getElementById("pinviejo").value;
      



          console.log (usuariocambiopin);
          console.log (pinviejo);

          console.log(usersList);

          // encontrando el usuario que es igual al logeado
          const findUser = usersList.find((user) => user.userName === usuariocambiopin)
          console.log(findUser.pin)
          var pinUserviejo = findUser.pin;
       
          var pinnuevo = document.getElementById("pinnuevo").value;

          

          if (pinviejo === findUser.pin && usuariocambiopin === findUser.userName) {
               console.log (findUser.pin);
               findUser.pin === pinnuevo.value              
               console.log (findUser.pin);
               console.log (pinnuevo);
          }else{
               alert("Por favor ingrese el usurio y el Pin viejo correctamente");
               document.getElementById("usuariocambiopin").value="";
               document.getElementById("pinviejo").value="";
               document.getElementById("pinnuevo").value="";
               document.getElementById("usuariocambiopin").focus();

          }}

     */





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
          <input type="submit" className="btn btn-primary" value="Cambiar pin" onClick= {CambiarPin}  />

          </form>

     </div>
     )
}}
