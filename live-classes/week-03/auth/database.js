
const express= require('express')
const mongoose = require('mongoose');
const app= express()

app.use(express.json())

mongoose.connect('mongodb+srv://admin:9KUahbZMaRotgkuZ@cluster0.z8zlmqz.mongodb.net/userdemo');

const User = mongoose.model('User', { name: String , email:String, password : String});

const user = new User({ name: 'Krishna', eamil:'abc@123',password:"knr" });

app.post("/signup",async function(req,res){
  const username= req.body.username
  const password = req.body.password
  const name = req.body.name

  const existingUser = await User.findOne({email:username})
  if(existingUser){
    return res.status(400).send("User alrrady exist")  
  }
  const user = new User({
    name:name,
    email:username,
    password:password
  })
  user.save()
  res.json({
    msg:"User created successfully"
  })
})



