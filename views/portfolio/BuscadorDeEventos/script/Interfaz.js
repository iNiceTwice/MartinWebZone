import {Eventbrite} from "./Eventbrite.js"
const api = new Eventbrite();
export class Interfaz{
    crearOptions(){
        api.obtenerCategorias()
        .then(categorias =>{
            const select = document.querySelector("#categorias");
            const cats = categorias.categorias.categories
               cats.forEach(cat => {
                   const option = document.createElement("option")
                   option.value = cat.id
                   option.textContent = cat.name
                   select.appendChild(option)
               }); 
            })
    }
    mostrarMensaje(mensaje){
        const alert = `<div class="mt-3 alert alert-danger mensaje">${mensaje}</div>`
        const container = document.querySelector("#msjContainer");
        container.innerHTML = alert;
        setTimeout(()=>{
            container.innerHTML = ""
        },4000)
    }
    mostrarEventos(eventos){
        const listadoEventos = document.querySelector("#listadoEventos");
        listadoEventos.classList.add("mt-5")
        let eventosArray = eventos.eventos.events
        eventosArray.forEach(evento =>{
            listadoEventos.innerHTML += 
            `<div class="card mt-2">
                    <div class="card-body">
                        <img class="img-fluid" src="${evento.logo != null ? evento.logo.url : ''}">
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <h2 class="text-center">${evento.name.text}</h2>
                            <p>${evento.description.text.substring(0,300)}...</p>
                            <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>
                            <a href="${evento.url}" target="_blank" class="btn btn-block mt-2">Comprar Boletos</a>
                        </div>
                    </div>
                </div>`  
        })
        const linkAnchor = document.querySelector("#eventsReady").click();
    }
} 