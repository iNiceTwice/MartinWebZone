import {API} from "./api.js";
const api = new API();
export class Interfaz{
    constructor(){
    }
    crearOptions(){
        const select = document.querySelector("#cryptoCoin");
        api.obtenerMonedas()
            .then(moneda => {
                for(const [key,value] of Object.entries(moneda.monedas.Data)){
                    const option = document.createElement("option");
                    option.value = value.Symbol;
                    option.textContent = value.CoinName
                    select.appendChild(option);    
                }
            })
    }
    mostrarResultado(resultado,coin,cryptoCoin){
        const datosMoneda = resultado[cryptoCoin][coin]
        let precio = datosMoneda.PRICE.toFixed(2),
            actualizacion = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString("es-AR")
        let template = 
        `<div class="card bg-primary mt-3 mb-3">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado: </h2>
                <p>El precio de <strong>${datosMoneda.FROMSYMBOL}</strong> a moneda <strong>${datosMoneda.TOSYMBOL}</strong>  es de: <strong>$${precio}</strong></p>
                <p>Ultima actualizacion: <strong> ${actualizacion}</strong></p>
            </div>
        </div>`
        const respuesta = document.querySelector("#resultado");
        respuesta.innerHTML = template       
    }
}