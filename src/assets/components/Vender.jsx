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
       
       const [registrocompra, setergistrocompra] = useState(obtenerInversion());

       const botonVender = (miIndex) => {
          if(window.confirm('¿Está seguro de que quiere vender ésta acción?')){
            var registrosFiltrados = registrocompra.filter((e, index) => {
              return miIndex !== index
            });
            setergistrocompra(registrosFiltrados);
            
            
            
            


        }
      }



       useEffect(() => {
         localStorage.setItem("registrocompra", JSON.stringify(registrocompra))
       }, [registrocompra]);
     
          return (
               <div className="">
     
               <div className="">
                 Ventas de acciones
               </div>
       
               <div className="">
                 
       
        
                 <>
                   <table id="compras" className="">
                       <thead className="">
                           <tr>
                               <th>Item</th>
                               <th>Acciones disponibles</th>
                           </tr>
                       </thead>
                       <tbody className="">
                           {
                             registrocompra.map((compra, index) => (
                               <tr key={index}>
                                 <th>{ index+1 }</th>
                                 <th>{ compra.inversion }</th>
                                 <td className="">
                                   <button className="" onClick={()=>botonVender(index)}>
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
            
             </div>
     
     )
     }
