const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://testuser:Akanksha123@cluster1.mwdwdyi.mongodb.net/youtubeSubscribersDB?retryWrites=true&w=majority")

.then(()=>{
  console.log("MongoDB Connected");

  app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
  });

})

.catch(err=>{
  console.log(err);
});