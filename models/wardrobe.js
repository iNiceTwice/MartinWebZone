const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tiendaSchema = new Schema({
    nombre:{type:String, required:true},
    webs:[String],
    tags:[String],
    reputacion:String,
    creado_en:{type:Date,default:Date.now()}
})

module.exports = mongoose.model("tienda",tiendaSchema)