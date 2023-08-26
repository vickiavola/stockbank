import { useState, useEffect } from 'react';

export const Revisar = () => {
 
     const obtenerInversion = () => {
       var datos = localStorage.getItem("registrocompra");
       if(datos) {
         return JSON.parse(datos);
    }else {
         return [];
       }
     }

     const obtenerVentas = () => {
          var datos = localStorage.getItem("registroventa");
          if(datos) {
            return JSON.parse(datos);
       }else {
            return [];
          }
        }



     const [registrocompra, setRegistrocompra] = useState(obtenerInversion());
     const [registroventa, setRegistroventa] = useState(obtenerVentas());

     function estado(opcion){
          console.log({registrocompra});



          if(opcion === 1){
               console.log({registroventa});

          }else if(opcion ===2){

          }else{

          }

     }






     return (
     <>

<div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Estado de cuenta
    </div>

    <div className="table-responsive">
      


        <div >
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Compras realizadas</h5>
                <p className="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">Ventas realizadas</h5>
                <p className="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Saldo</h5>
                <p className="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
        </div>


      
    </div>
 
  </div>



     </> 

)
}
