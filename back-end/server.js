const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const userRoutes = require('./routes/userRoutes');


const MONGO_URI = "mongodb://localhost:27017/email";

mongoose.connect(MONGO_URI,()=>{
    console.log("connected to database")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/",userRoutes);


const PORT = 3000;

app.listen( PORT,()=>{
    console.log(`Server running in port ${PORT}`);
})