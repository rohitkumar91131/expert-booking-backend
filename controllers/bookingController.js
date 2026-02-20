const Booking = require("../models/Booking")
const Expert = require("../models/Expert")

exports.createBooking = async (req, res) => {
  const { expertId, date, time } = req.body

  const exists = await Booking.findOne({ expertId, date, time })
  if (exists) return res.status(400).json({ msg: "Slot already booked" })

  await Expert.updateOne(
    { _id: expertId, "slots.date": date, "slots.time": time, "slots.booked": false },
    { $set: { "slots.$.booked": true } }
  )

  const booking = await Booking.create(req.body)
  global.io.emit("slotBooked", { expertId })

  res.json(booking)
}

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find({ email: req.query.email })
  res.json(bookings)
}

exports.updateStatus = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  )
  res.json(booking)
}