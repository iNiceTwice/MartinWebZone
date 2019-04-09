import {Eventbrite} from "./Eventbrite.js";
import {Interfaz} from "./Interfaz.js";

const api = new Eventbrite()
const ui = new Interfaz()
api.obtenerCategorias()
ui.crearOptions()
const btn = document.querySelector("#btn");
const eventoInput = document.addEventListener("keyup", function(e){
    if(e.keyCode==13){
        btn.click();
    } 
})
btn.onclick = function(){
    let evento = document.querySelector("#evento").value;
    let categoria = document.querySelector("#categorias");
    let categoriaSelect = categoria.options[categorias.selectedIndex].value;
    if(evento == ""){
        ui.mostrarMensaje("Pon algo en 'Evento'");
    }else{
        api.obtenerEventos(evento,categoriaSelect)
            .then(eventos =>{
                if(eventos.eventos.events.length > 0){
                    const listadoEventos = document.querySelector("#listadoEventos");
                    listadoEventos.innerHTML= "";
                    ui.mostrarEventos(eventos)
                }else{
                    ui.mostrarMensaje("No se encontraron resultados")
                }
            })
    }
}