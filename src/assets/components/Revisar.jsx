import { useState, useEffect } from 'react';


export const Revisar = () => {
  const obtenerCompra = () => {
    var datos = localStorage.getItem("registrocompra");
    if(datos) {
         return JSON.parse(datos);
    }else {
         return [];
    }
    }

      const obtenerSaldo = () => {
        var datos2 = localStorage.getItem("registrosaldo");
        if(datos2) {
             return JSON.parse(datos2);
        }else {
             return [];
        }
        }

        const [registrocompra]  = useState(obtenerCompra());
        const [registrosaldo]  = useState(obtenerSaldo());

        var i= 0;
        var resultado = 0;
        var  miSaldo;
        function saldo (opcion) {
          if (opcion === 1){
          for (i=0; i<registrosaldo.length; i++){
            miSaldo = registrosaldo[i];
            resultado += parseInt(miSaldo.saldo);
          }

        }
        return resultado;
        }

  return(
 <>
        
        <>
                   <table id="compras" className="titulo-pagina">
                       <thead className="item">
                           <tr>

                               <th className="titulo-acciones">Acciones disponibles</th>

                           </tr>
                       </thead>
                       <tbody className="list-acciones">
                           {
                             registrocompra.map((compra, index) => (
                               <tr key={index}>
                                 
                                 <th>{ compra.inversion }</th>
                                 <td className="">
 

                                   </td>
                               </tr>
                             ))
                           }
                       </tbody>

                </table>


                <table id="compras" >
                       <thead className="">
                           <tr>

                               <th className="titulo-acciones">Saldo Disponible</th>
                           </tr>
                       </thead>
                       <tbody className="list-acciones">
                           
                            {saldo(1)} dólares
                           
                       </tbody>

                </table>



                 </> 
 
 
 </>

  )
}