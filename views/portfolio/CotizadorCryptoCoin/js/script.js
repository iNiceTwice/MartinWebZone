import {API} from "./api.js";
import {Interfaz} from "./ui.js";
const api = new API("7ac26364bc7d8f0da1de385ae3cd15dac648bef9a476be9adf297731786cd8ae");
const t = true;
const ui = new Interfaz();
api.obtenerMonedas()
ui.crearOptions()
const btn = document.querySelector("#btn")
btn.addEventListener("click", (e) =>{
    e.preventDefault();
    const moneda = document.querySelector("#moneda");
    const monedaSelect = moneda.options[moneda.selectedIndex].value;
    const criptomoneda = document.querySelector("#cryptoCoin");
    const criptomonedaSelect = criptomoneda.options[criptomoneda.selectedIndex].value;
    const respuesta = document.querySelector("#resultado");
    respuesta.innerHTML = "";      
    api.obtenerCotizacion(monedaSelect,criptomonedaSelect)
        .then(data => {
            ui.mostrarResultado(data.resultado.RAW, monedaSelect, criptomonedaSelect)   
        })
        btn.classList.remove("mb-4")   
});


    
  

    
