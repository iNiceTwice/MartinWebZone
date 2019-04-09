const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/index.js")
const path = require("path")
const app = express()

//setting DB
mongoose.connect("mongodb+srv://nicetwice:nice123@cluster0-mvptq.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })
    .then(data=>{
        console.log("Database -Online-")
    })
    .catch(err=>{
        console.log(err)
    })

    
//templates
app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, "/views")))
app.use(express.static(path.join(__dirname, "/views/portfolio")))
app.set("view engine", "ejs")  

app.use(express.urlencoded({ extended: false }))
//Callin' Routes
app.use("/",routes)

//setting server
app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), ()=>{console.log("Server -Online-")})