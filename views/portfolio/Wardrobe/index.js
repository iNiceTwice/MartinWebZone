const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const path = require("path")
const app = express()

//calling database
mongoose.connect("mongodb+srv://nicetwice:nice123@cluster0-mvptq.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })
    .then(data=>{console.log("Database -online-")})
    .catch(err=>{console.log(err)})

//setting views
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, "/views")))
app.set("view engine","ejs")

//middlewares
app.use(express.urlencoded({extended:false}))

//main routing
app.use("/",routes)

//setting server
app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), () => console.log("Server -online-"))