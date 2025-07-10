const mongoose = require("mongoose")

//creating schema  => for schema  s should be upper case

const PositonSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
})

//creating model =>for model  m should be smaller case

const Position = mongoose.model("Position",  PositonSchema)

module.exports =  Position;