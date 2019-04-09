const mongoose = require("mongoose")
const Schema = mongoose.Schema

const projectSchema = new Schema({
    link:{type:String ,required:true},
    title: { type: String, required: true },
    description:String,
    resources:String,
    imgUrl:{ type: String, required: true }
})

module.exports = mongoose.model("projects",projectSchema)