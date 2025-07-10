const mongoose = require("mongoose")

//creating schema  => for schema  s should be upper case

const OrderSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
})

//creating model =>for model  m should be smaller case

const Order = mongoose.model("Order", OrderSchema)

module.exports = Order;