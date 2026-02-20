const mongoose = require("mongoose")

module.exports = mongoose.model(
  "Booking",
  new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    expertId: String,
    date: String,
    time: String,
    notes: String,
    status: { type: String, default: "Pending" },
  })
)