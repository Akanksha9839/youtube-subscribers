const mongoose = require("mongoose")
const Subscriber = require("./models/subscribers")

mongoose.connect("mongodb://127.0.0.1:27017/youtubeSubscribersDB")

const data = [
{
name: "John Doe",
subscribedChannel: "Tech With Tim",
subscribedDate: new Date()
},
{
name: "Jane Smith",
subscribedChannel: "Programming with Mosh",
subscribedDate: new Date()
},
{
name: "Alex Johnson",
subscribedChannel: "CodeWithHarry",
subscribedDate: new Date()
}
]

Subscriber.insertMany(data)
.then(() => {
    console.log("Database created successfully")
    mongoose.connection.close()
})
.catch(err => console.log(err))