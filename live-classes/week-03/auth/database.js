
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:9KUahbZMaRotgkuZ@cluster0.z8zlmqz.mongodb.net/userdemo');

const User = mongoose.model('User', { name: String , email:String, password : String});

const user = new User({ name: 'Krishna', eamil:'abc@123',password:"knr" });
user.save()
