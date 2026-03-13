# 🎬 YouTube Subscribers API

The **YouTube Subscribers API** is a backend REST API built using **Node.js, Express.js, and MongoDB Atlas**.  
This application provides API endpoints to retrieve information about YouTube subscribers stored in a MongoDB database.

The project demonstrates backend development concepts such as REST API development, database integration, and cloud deployment.

---

## 🚀 Live Deployment

Base URL  
https://youtube-subscribers-6j2b.onrender.com

Example API  
https://youtube-subscribers-6j2b.onrender.com/subscribers

---

## 📂 GitHub Repository

https://github.com/Akanksha9839/youtube-subscribers

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Render (Deployment)

---

## 📡 API Endpoints

### 1️⃣ Get All Subscribers

Returns the complete list of subscribers stored in the database.

Endpoint  
GET /subscribers

Example  
https://youtube-subscribers-6j2b.onrender.com/subscribers

---

### 2️⃣ Get Subscriber Names

Returns only the subscriber names and subscribed channels.

Endpoint  
GET /subscribers/names

Example  
https://youtube-subscribers-6j2b.onrender.com/subscribers/names

---

### 3️⃣ Get Subscriber by ID

Returns a specific subscriber using their unique ID.

Endpoint  
GET /subscribers/:id

Example  
/subscribers/65a123456789

---

## 🗄️ Database

The project uses **MongoDB Atlas** as the database.

Collection Name: **subscribers**

Each document contains the following fields:

- name
- subscribedChannel
- subscribedDate

Example document:

{
"name": "John Doe",
"subscribedChannel": "Tech With Tim",
"subscribedDate": "2024-01-01"
}

---

## 💻 Run Project Locally

1. Clone the repository

git clone https://github.com/Akanksha9839/youtube-subscribers.git

2. Go to project folder

cd youtube-subscribers

3. Install dependencies

npm install

4. Start the server

node index.js

Server will run on  
http://localhost:3000

---

## 👩‍💻 Author

Akanksha  
GitHub:  
https://github.com/Akanksha9839

---

## 📄 License

This project was created for educational purposes as part of a backend development assignment.