export class API {
    constructor(key){
        this.key = key;
    }
    async obtenerMonedas(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.key}`
        const data = await fetch(url);
        const monedas = await data.json();
        return{
            monedas
        }
    }
    async obtenerCotizacion(coin,cryptoCoin){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}&api_key=${this.key}`;
        const data = await fetch(url);
        const resultado = await data.json();
        return{
            resultado
        }
    }
}