const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title : {
        type : String,
        min : 6,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    },
    developer : {
        type : String,
        required : true,
        min : 6
    }
})

module.exports = mongoose.model("Task", schema)