import { useState, useEffect } from 'react';

export const Estado = () => {
 
  
  const [registrocompra] = useState(obtenerInversion());

  

  
  
  useEffect(() => {
    localStorage.setItem("registrocompra", JSON.stringify(registrocompra))
  }, [registrocompra]);





     return (
          <div className="">

          <div className="">
            Estado de cuenta
          </div>
  
          <div className="">
            
  
   
            <>
              <table id="compras" className="">
                  <thead className="">
                      <tr>
                          <th>#</th>
                          <th>Comprado</th>
                      </tr>
                  </thead>
                  <tbody className="">
                      {
                        registrocompra.map((compra, index) => (
                          <tr key={index}>
                            <th>{ index+1 }</th>
                            <th>{ compra.inversion }</th>
                          </tr>
                        ))
                      }
                  </tbody>
              </table>

              <table id="ventas" className="">
                  <thead className="">
                      <tr>
                          <th>item</th>
                          <th>Vendido</th>
                      </tr>
                  </thead>
                  <tbody className="">
                      {
                        obtenerVenta.map((venta, index) => (
                          <tr key={index}>
                            <th>{ index+1 }</th>
                            <th>{ venta.inversion }</th>
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