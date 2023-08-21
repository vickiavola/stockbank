import { useState } from 'react';
import { Menu } from './Menu';
import { Login } from "./Login";
//import { Menu } from "./Menu";
import logo from "../img/stock_bank.svg";


export const Solicitudpin = (props) => {

     const [login, setLogin] = useState("false");
     const [pin, setPin] = useState("");
     const userN = props.u;


     function inicioSesion(e){
          e.preventDefault();
          var upin = document.getElementById("upin").value;
          

          if (upin.length ===0){
               alert("Por favor ingrese su PIN para continuar");
          }else{
               if(upin !=0){
                    //setLogin("true");
                    const Users = JSON.parse(localStorage.getItem('users')) || []
                    const estaRegistrado = Users.find(user => user.userName === userN)

                    if(estaRegistrado){
                         const estaRegistradoOk = Users.find(user => user.userName === userN && user.pin === pin)
                         if(!estaRegistradoOk){
                              alert("Usuario o contraseña incorrectos");
                              setLogin("login");
                              document.getElementById("upin").value="";
                              document.getElementById("upin").focus();
                         }
                         else{setLogin("true")}
                         document.getElementById("form_solicitudpin").style.display = "none";
                    }else{

                    Users.push({userName: userN, pin: upin})
                    localStorage.setItem('users', JSON.stringify(Users))
                    
                    setLogin("false");
                    alert("Hemos realizado su registro.  Ingrese sus datos para ingresar");
                    document.getElementById("upin").value="";
                    document.getElementById("upin").focus();
                    }


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
               <input type="password" id="upin"className="form-control" onChange={ (e)=> setPin(e.target.value) } required/>
          </div>
          <br/>
          <input type="submit" className="btn btn-primary" value="Login" onClick= {inicioSesion}/>

          </form>

     { login === "true" && <Menu/> }
     { login === "login" && <Login/> }
     </div>
     )
}