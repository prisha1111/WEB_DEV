//ALL MODULES
const express=require('express');
require("dotenv").config();
//MONGOOSE MODULE
const mongoose = require('mongoose');
const userRoute=require("./routes/userRoutes")


//INSTANCES
const app = express()



//APPLICATION ENDPOINTS
app.use("/api/user",userRoute);


//VARIABLES
const PORT = process.env.PORT || 4500;
const DATABASE_URL=process.env.DATABASE_URL;
const DATABASE_NAME=process.env.DATABASE_NAME;

const serverStarted=async()=>{
    try{
        await mongoose.connect(DATABASE_URL).then(() => console.log('Connected!: ${DATABASE_NAME}'));
       app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`)
    });
    }catch(err){
    console.log(err)
    }
};
serverStarted();








