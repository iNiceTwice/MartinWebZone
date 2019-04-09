
//Constantes y variables----------------------
const modal = document.querySelector("#btnModal").click();
const presupuesto = document.querySelector("#presupuesto");
const btn = document.querySelector("#btn");
const modalClose = document.querySelector("#modalClose");
const listadoProductos = document.querySelector(".listado-productos");
const limpiarInterfaz = document.querySelector("#borrarTodo");
let gasto = document.querySelector("#gasto");
let cantidad = document.querySelector("#cantidad");
modalClose.disabled = true;
// Event Listeners------------------
listadoProductos.addEventListener("click", borrarProducto);
limpiarInterfaz.addEventListener("click", borrarTodo);
modalClose.addEventListener("click",agregarPresupuesto);
btn.addEventListener("click", agregarGastos);
presupuesto.addEventListener("keyup", function(e){
    if(presupuesto.value != ""){
        modalClose.disabled = false;
    }else{
        modalClose.disabled = true;
    }
    if(e.keyCode==13){
        modalClose.click();
    }
});
gasto.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        btn.click();
    }
})
cantidad.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        btn.click();
    }
})
//Clases--------------------
class Compras{
    constructor(presupuesto,resto,gasto, cantidad){
        this.presupuesto = presupuesto;
        this.resto = resto;
        this.gasto = gasto;
        this.cantidad = cantidad;
    }
}
class Interfaz extends Compras{
    constructor(presupuesto,resto,gasto,cantidad){
        super(presupuesto,resto,gasto,cantidad);
    }
    mostrarPresupuesto(){
        const presupuestoBox = document.querySelector("#presupuestoBox").innerHTML = `<strong>Presupuesto: $${this.presupuesto}</strong>`
    }
    mostrarRestante(suma){
        this.resto = Number(this.resto) + Number(suma);
        this.restanteColor();
        restoBox.innerHTML = `<strong>Restante: $<span id="resto">${this.resto}</span></strong>`;
    }
    mostrarProducto(){
        const tbody = document.querySelector("tbody");
        const tr = document.createElement("tr");
        let producto =`
            ${this.gasto} <span class="ml-5 badge badge-success"> $<span id="cantidadEnLista">${this.cantidad}</span></span>
            <button type="button" class="close">
                <span class ="ml-3 remove">&times;</span>
            </button>
        `
        tbody.appendChild(tr);
        tr.innerHTML = producto;
    }
    restanteColor(){
        const restoBox = document.querySelector("#restoBox");
        if(this.resto<=this.presupuesto*0.50){
            restoBox.classList.replace("alert-success","alert-warning")
        }
        if(this.resto>this.presupuesto*0.50){
            restoBox.classList.replace("alert-warning","alert-success")
        }
        if(this.resto<=this.presupuesto*0.25){
            restoBox.classList.replace("alert-success","alert-danger")
            restoBox.classList.replace("alert-warning","alert-danger")
        }
        if(this.resto>this.presupuesto*0.25){
            restoBox.classList.replace("alert-danger","alert-success")
            restoBox.classList.replace("alert-danger","alert-warning")
        }
    }
    resta(){
        let cantidad = this.cantidad
        let presupuesto = this.presupuesto
        if(cantidad == null){
            this.resto = presupuesto;
        }else{
            this.resto = Number(this.resto) - cantidad;
        }
    }
    error(mensaje){
        const gastoContainer = document.querySelector("#gastoContainer");
        let alertError =
        `<div class="m-4 alert alert-danger" role="alert">
            <strong>Hey!</strong> ${mensaje}.
        </div>`
        gastoContainer.innerHTML = alertError;
        setTimeout(function(){
            gastoContainer.innerHTML = ""
        },3000)
    }
}

// Funciones-------------------
function agregarPresupuesto(){
    //instanciando Interfaz
    const interfaz = new Interfaz(presupuesto.value,presupuesto.value);
    interfaz.mostrarPresupuesto();
    interfaz.mostrarRestante(0);
}
function agregarGastos(){
    let gasto = document.querySelector("#gasto").value;
    let cantidad = document.querySelector("#cantidad").value;
    let resto = Number(document.querySelector("#resto").textContent)
    //instanciando Compras
    const compras = new Compras(presupuesto.value,resto,gasto,cantidad);
    //instanciando Interfaz
    const interfaz = new Interfaz(presupuesto.value,resto,gasto,cantidad)
    //validacion
    if(gasto.length > 15 || cantidad.length > 5){
        interfaz.error("Número de caracteres sobrepasado");
    }else if(gasto == "" || cantidad == ""){
        interfaz.error("Campos vacios")
    }else{
        interfaz.resta();
        interfaz.mostrarRestante(0);
        interfaz.restanteColor();
        interfaz.mostrarProducto();
        const form = document.querySelector("form").reset();
        let gasto = document.querySelector("#gasto").focus();
    }
}
function borrarProducto(e){
    if(e.target.classList.contains("remove")){
        let suma = Number(e.target.parentElement.parentElement.querySelector("#cantidadEnLista").textContent);
        let resto = Number(document.querySelector("#resto").textContent);
        console.log(e.target.parentElement.parentElement.querySelector("#cantidadEnLista").textContent)
        //instanciando Interfaz
        const interfaz = new Interfaz(presupuesto.value,resto);        interfaz.mostrarRestante(suma);
        interfaz.restanteColor();
        e.target.parentElement.parentElement.remove();
    }
}
function borrarTodo(){
    const form = document.querySelector("form").reset();
    listadoProductos.innerHTML = "";
    agregarPresupuesto();
}