
const express = require('express')
const { createTodo } = require('./type')
const { todo } = require('./db')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({
}))

app.post('/todo', async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status({
            msg: "You send wrong input"
        })
        return
    }
    //Put in DB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/cpmpleted', async (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.json({
            msg: "Yousend wrong input"
        })
        return
    }
    await todo.update({
        _id: req.body.id
    },
        {
            completed: true
        }
    )
    res.json({
        msg:"Todo mark is completed"
    })
})
app.listen(3000, () => {
    console.log("Server is up")
})