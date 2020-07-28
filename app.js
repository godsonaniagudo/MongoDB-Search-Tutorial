const express = require("express");
const { mongo } = require("mongoose");
const app = express()
const mongoose = require("mongoose")
const bofyParser = require("body-parser")
const tasksRoute = require("./routes/tasks");
const bodyParser = require("body-parser");
require("dotenv").config()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_DB_CONNECT_URL,  { useUnifiedTopology: true ,  useNewUrlParser: true } , response => {
    console.log(response);
})

app.use("/tasks", tasksRoute)

app.listen(8085, () => {
    console.log("Server started on port 8085");
})