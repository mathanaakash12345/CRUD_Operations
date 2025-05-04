const express = require('express')
const cors =require('cors')
const bodyParser = require("body-parser");
const port = process.env.PORT || 5001;  
const database = require('./Config/Connect')
const callpoint = require('./Routers/Endpointconnection')
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

database()

app.use("/user",callpoint)
app.listen(port, ()=>{
    console.log("The Server running at  http://localhost:5001")
})