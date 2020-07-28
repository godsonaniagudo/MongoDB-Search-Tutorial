const router = require("express").Router()
const Task = require("../models/task")

router.get("/create", (req,res) => {
    res.send("creating")
})

router.post("/create", async (req,res) => {
    
    const newTask = new Task({
        title : req.body.task,
        developer : req.body.developer
    })


    const savedTask = await newTask.save()

    res.send(savedTask)


})

router.post("/search", async (req,res) => {
    const queryString = req.body.query
    const queryStrings = queryString.split(" ")
    allQueries =[]
    queryStrings.forEach(element => {
        allQueries.push({title : {$regex : String(element), $options : "i"}})
    });
    const allTasks = await Task.find({developer : req.body.developer, $or : allQueries})
    if(!allTasks || allTasks.length === 0) res.status(400).send({error : "No task was found"})
    res.status(200).send(allTasks)
})

module.exports = router