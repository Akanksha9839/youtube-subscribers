const Subscriber = require("../models/subscribers")

// Get all subscribers
const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.status(200).json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get subscriber names and subscribed channels
const getSubscribersNames = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, { name: 1, subscribedChannel: 1, _id: 0 })
    res.status(200).json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get subscriber by ID
const getSubscriberById = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id)

    if (!subscriber) {
      return res.status(404).json({ message: "Subscriber not found" })
    }

    res.status(200).json(subscriber)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getSubscribers,
  getSubscribersNames,
  getSubscriberById
}