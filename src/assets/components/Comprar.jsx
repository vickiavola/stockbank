import { useState, useEffect } from 'react';

export const Comprar = () => {

  const obtenerInversion = () => {
    var datos = localStorage.getItem("registrocompra");
    if(datos) {
      return JSON.parse(datos);
 }else {
      return [];
    }
  }

  const [registrocompra, setRegistrocompra] = useState(obtenerInversion());

  const [inversion, setInversion] = useState("");

  const botonComprar = (e) => {
    e.preventDefault();
    var miInversion = { inversion }
    setRegistrocompra([...registrocompra, miInversion]);
    limpiarFormulario();
  }

  useEffect(() => {
    localStorage.setItem("registrocompra", JSON.stringify(registrocompra))
  }, [registrocompra]);


  const limpiarFormulario = () => {
    setInversion("");
    document.getElementById("listadoInversiones").reset();
  }

     return (
          <div>

          <div className="titulo-pagina">
            Seleccione la invesión que desea realizar.
            <br/>
            <form id="listadoInversiones"  onSubmit={ botonComprar }>
                <div>
                  <select className="menu_acciones" onChange={(e) => setInversion(e.target.value)} required  >
                    <option value="">Inversiones Disponibles</option>
                    <option value="10 Acciones de Coca-Cola">10 Acciones de Coca-Cola</option>
                    <option value="10 Accioens de Pepsi-Cola">10 Acciones de Pepsi-Cola</option>
                    <option value="10 Acciones de Microsoft">10 Acciones de Microsoft</option>
                    <option value="10 Acciones de Apple">10 Acciones de Apple</option>
                    <option value="10 Acciones de Facebook">10 Acciones de Facebook</option>
                    <option value="10 Acciones de Twitter">10 Acciones de Twitter</option>
                  </select>
                </div>
                  <div className="separacion-boton">
                  <button className="btn-primary">Comprar</button>
                  </div>
            </form>
          </div>
                  
        </div>
  
)
}