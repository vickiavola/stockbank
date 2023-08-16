export const Comprar = () => {

     return (
          <div>

          <div className="h3">
            Seleccione la invesión que desea realizar
            <br/>
            <form id="ListadoInversiones"  >


                <div className="col-6">
                  <select required  >
                    <option value="">Inversiones Disponibles</option>
                    <option value="accione_1">10 Acciones de Coca-Cola</option>
                    <option value="accione_2">10 Accioens de Pepsi-Cola</option>
                    <option value="accione_3">10 Acciones de Microsoft</option>
                    <option value="accione_4">10 Aciones de Apple</option>
                  </select>
                </div>


                  <button className="boton-guardar">Guardar Datos</button>


            </form>
          </div>
                  
        </div>
  
)
}