/*
Todo{
    title:string,
    description:string,
    completed: bolean
}
*/

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://admin:9KUahbZMaRotgkuZ@cluster0.z8zlmqz.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema)
module.exports={
    todo:todo
}