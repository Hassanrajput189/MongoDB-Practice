// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 
import mongoose from "mongoose";
import express from "express";
import { company } from "./company.js";

let conn = await mongoose.connect("mongodb://localhost:27017/company")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/', (req, res) => {
//     const todo = new Todo({  desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5* Math.random()) })
//     todo.save() 
//     res.send('Hello World!')
// })

// app.get('/a', async (req, res) => { 
//     let todo = await Todo.findOne({})
//     console.log(todo)
//     res.json({title: todo.title, desc: todo.desc})
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


