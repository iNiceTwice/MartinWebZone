const express = require("express")
const router = express.Router()
const path = require("path")
const Portfolio = require("../models/portfolio.js")
const Tiendas = require("../models/wardrobe.js")

    router.get("/",(req,res)=>{
        res.render("index",{
            main:true
        })
    })
    
    router.get("/about",(req,res)=>{
        res.render("about",{
            main:false,
            link: "Contacto" //means if the page is "about", then it need a "contact" link
        })
    })

    router.get("/contact",(req,res)=>{
        res.render("contact",{
            main:false,
            link:"Sobre mi" //means if the page is "contact", then it need a "about" link
        })
    })

    router.get("/form", (req, res) => {
        res.render("form")
    })

    router.get("/portfolio",async (req,res)=>{
        const projects = await Portfolio.find()
        res.render("portfolio",{
            projects:projects,
            main:false,
            link:"Doble" //means the page need to render 2 links (contact,about)
        })
    })
  
    // ------ Portfolio Projects ------

    router.get("/portfolio/buscador-de-eventos",(req,res)=>{
        res.sendFile(path.join(__dirname, "../views/portfolio/eventos.html"))
    })
    router.get("/portfolio/carrito-de-compras",(req,res)=>{
        res.sendFile(path.join(__dirname, "../views/portfolio/carrito.html"))
    })
    router.get("/portfolio/cotizador-crypto",(req,res)=>{
        res.sendFile(path.join(__dirname, "../views/portfolio/crypto.html"))
    })
    router.get("/portfolio/gasto-mensual",(req,res)=>{
        res.sendFile(path.join(__dirname, "../views/portfolio/gasto.html"))
    })
    router.get("/portfolio/cotizador-de-seguros",(req,res)=>{
        res.sendFile(path.join(__dirname, "../views/portfolio/seguro.html"))
    })

    // -------- End Portfolio ------- 

/*
   // ******** ONLY FOR DEV USE **********

    router.post("/portfolio/add", async(req,res)=>{
        console.log(req.body)
        const projects = new Portfolio(req.body)
        await projects.save()
        res.redirect("/form")
    })
*/
    module.exports = router
