
const express = require("express");
const app = express()

app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://admin:9KUahbZMaRotgkuZ@cluster0.z8zlmqz.mongodb.net/userappnew')

const User = mongoose.model('Users', { name: String, email: String, password:String });

const user = new User({ name: 'Krishna',email:"abc@123gmail.com", password:"demo" });

// user.save().then(() => console.log('Hlo'))

// const User2 = mongoose.model('Users2', { name: String, email: String, password: String });


app.post("/signup", async  (req, res) => {
const username = req.body.username
const name = req.body.name
const password = req.body.password

const existingUser = await User.findOne({email:username})
if(existingUser){
    return res.status(400).send("username already exist")
}
    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save()
    res.json({
        msg:"User created Successfully"
    })
})

app.listen(3000,()=>{
    console.log("server up ")
})