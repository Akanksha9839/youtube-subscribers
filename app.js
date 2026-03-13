const express = require("express")
const Subscriber = require("./src/models/subscribers")

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to YouTube Subscribers API")
})

// GET all subscribers
app.get("/subscribers", async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET subscribers names
app.get("/subscribers/names", async (req, res) => {
    try {
        const subscribers = await Subscriber.find({}, { name: 1, subscribedChannel: 1, _id: 0 })
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET subscriber by ID
app.get("/subscribers/:id", async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id)

        if (!subscriber) {
            return res.status(404).json({ message: "Subscriber not found" })
        }

        res.json(subscriber)

    } catch (err) {
        res.status(400).json({ message: "Invalid ID" })
    }
})

module.exports = app