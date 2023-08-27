import { useState, useEffect } from 'react';



export const Vender = () => {
    
       const obtenerInversion = () => {
         var datos = localStorage.getItem("registrocompra");
         
         if(datos) {
           return JSON.parse(datos);
       }else {
           return [];
         }
       }
       
       const [registrocompra, setregistrocompra] = useState(obtenerInversion());
       const [registroventa, setregistroventa] = useState(obtenerInversion());

       


       const botonVender = (miIndex) => {
          if(window.confirm('¿Está seguro de que quiere vender ésta acción?')){
            var registrosFiltrados = registrocompra.filter((e, index) => {

            return miIndex !== index
            });
            const ventas = [];
            console.log([registrocompra[0]]);
            ventas.push([registrocompra[0]]);
            const ventaAceptada = [...ventas];

            console.log([ventaAceptada]);


            setregistrocompra(registrosFiltrados);
            

            setregistroventa(ventaAceptada);
            
        
        }
      }
       useEffect(() => {
         localStorage.setItem("registrocompra", JSON.stringify(registrocompra))
       }, [registrocompra]);
     
       useEffect(() => {
        localStorage.setItem("registroventa", JSON.stringify(registroventa))
      }, [registroventa]);



          return (
               <div className="">
     
               <div className="titulo-pagina">
                 Ventas de acciones
               </div>
       

                 <>
                   <table id="compras" className="tabla-venta">

                       <tbody className="tabla-venta1">
                           {
                             registrocompra.map((compra, index) => (
                               <tr className="" key={index}>

                                 <th className="">{ compra.inversion }</th>
                                 <td className="">

                                   <button className="btn-primary" onClick={()=>botonVender(index)}>
                                        <i className="">Vender</i>
                                   </button>

                                   </td>
                               </tr>
                             ))
                           }
                       </tbody>
                </table>

                 </> 
                 
  
       
               </div>


     
     )
     }
