import { useState, useEffect } from 'react';

export const Depositar = () => {

  const obtenerSaldo = () => {
    var datos = localStorage.getItem("registrosaldo");
    if(datos) {
      return JSON.parse(datos);
 }else {
      return [];
    }
  }

  const [registrosaldo, setRegistrosaldo] = useState(obtenerSaldo());

  const [saldo, setSaldo] = useState("");

  const botonComprarsaldo = (e) => {
    e.preventDefault();
    var miEstado = { saldo }
    setRegistrosaldo([...registrosaldo, miEstado]);
    limpiarFormulario();
  }

  useEffect(() => {
    localStorage.setItem("registrosaldo", JSON.stringify(registrosaldo))
  }, [registrosaldo]);


  const limpiarFormulario = () => {
    setSaldo("");
    document.getElementById("miSaldo").reset();
  }

     return (
      <div>
      <div className="titulo-pagina">
           Compra de Saldo (Moneda en dólares)
           <br/>
           <form id="miSaldo" onSubmit={ botonComprarsaldo }>

           

           <div >
                <input className="imput-saldo"
                type="number" 
                min="1" 
                max="100000000" 
                placeholder="Digite el saldo"
                onChange={(e) => setSaldo(e.target.value)}
                required />
           </div>


           <div>
           <div>
                <button className="btn-primary">Depositar Saldo</button>
           </div>
           </div>
           </form>
      </div>
       
 </div>

)
}