const express = require("express")
const Tienda = require("../model/tiendas.js") 
const router = express.Router()

router.get("/",async (req,res)=>{
    const tiendas = await Tienda.find()
    res.render("index",{
        tiendas : tiendas //tiene que renderizar: keys = -tiendas- y de valor la constante -tiendas- de la base de datos 
    })
})
router.post("/add", async (req,res)=>{
    console.log(req.body)
    const tienda = new Tienda(req.body)
    await tienda.save()
    res.redirect("/")
})
router.get("/delete/:id", async (req,res)=>{
    const {id} = req.params
    await Tienda.deleteOne({_id:id})
    res.redirect("/")
})

router.get("/edit/:id", async(req,res)=>{
    const {id} = req.params
    const tiendas = await Tienda.findById(id)
    res.render("partials/edit",{
        tiendas:tiendas
    })
})
router.post("/edit/:id", async (req,res)=>{
    const {id} = req.params
    await Tienda.update({_id:id}, req.body)
    res.redirect("/")
})
module.exports = router