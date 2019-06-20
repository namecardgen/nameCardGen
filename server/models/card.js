const mongoose = require("mongoose")
const Schema = mongoose.Schema


let cardSchema = new Schema({
    title : String,
    image : String,
    created_at: Date,
    userId : String
})

let Card = mongoose.model('card',cardSchema)

module.exports = Card