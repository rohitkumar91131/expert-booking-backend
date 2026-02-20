require("dotenv").config()
const mongoose = require("mongoose")
const Expert = require("./models/Expert")

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Expert.deleteMany()

  await Expert.insertMany([
    {
      name: "Rahul Sharma",
      category: "Fitness",
      experience: 5,
      rating: 4.5,
      slots: [
        { date: "2026-02-21", time: "10:00 AM" },
        { date: "2026-02-21", time: "11:00 AM" },
        { date: "2026-02-22", time: "12:00 PM" },
      ],
    },
    {
      name: "Priya Mehta",
      category: "Nutrition",
      experience: 3,
      rating: 4.2,
      slots: [
        { date: "2026-02-21", time: "09:00 AM" },
        { date: "2026-02-22", time: "01:00 PM" },
        { date: "2026-02-22", time: "03:00 PM" },
      ],
    },
    {
      name: "Amit Verma",
      category: "Career",
      experience: 7,
      rating: 4.8,
      slots: [
        { date: "2026-02-21", time: "02:00 PM" },
        { date: "2026-02-23", time: "04:00 PM" },
        { date: "2026-02-23", time: "05:00 PM" },
      ],
    },
    {
      name: "Sneha Roy",
      category: "Finance",
      experience: 4,
      rating: 4.4,
      slots: [
        { date: "2026-02-22", time: "10:00 AM" },
        { date: "2026-02-22", time: "11:30 AM" },
        { date: "2026-02-23", time: "01:30 PM" },
      ],
    },
    {
      name: "Karan Singh",
      category: "Mental Health",
      experience: 6,
      rating: 4.7,
      slots: [
        { date: "2026-02-21", time: "06:00 PM" },
        { date: "2026-02-23", time: "07:00 PM" },
        { date: "2026-02-24", time: "08:00 PM" },
      ],
    },
  ])

  console.log("Dummy Experts Inserted")
  process.exit()
})