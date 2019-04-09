// E4GFHX62Z436FKQXZWA4

export class Eventbrite{
    constructor(){
        this.token = "E4GFHX62Z436FKQXZWA4";
        this.date = "date" ;
    }
    async obtenerCategorias(){
        const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`
        const datos =  await fetch(url);
        const categorias = await datos.json();
        return{
            categorias
        }
    }
    async obtenerEventos(evento, categoria){
        const eventoSelect = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.date}&categories=${categoria}&token=${this.token}`);
        const eventos= await eventoSelect.json();
        return{
            eventos
        }
    }
}