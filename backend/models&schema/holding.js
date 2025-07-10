const mongoose = require("mongoose")

//creating schema  => for schema  s should be upper case

const HoldingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
})

//creating model =>for model  m should be smaller case

const Holding = mongoose.model("Holding", HoldingSchema)

module.exports = Holding;