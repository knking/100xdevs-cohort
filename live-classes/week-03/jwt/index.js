
const jwt = require("jsonwebtoken")

const user = {
    name: "Krishna",
    accountNumber: 12345678
}

const token = jwt.sign(user, "secrat") // this is same as checkbook generating(token generation)
console.log(token)

const verifiedToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS3Jpc2huYSIsImFjY291bnROdW1iZXIiOjEyMzQ1Njc4LCJpYXQiOjE3MDc0NTY5NTd9.hLcdZC7oyU9Q48WIVLtlKatBsy2bNN9K5CoWARBxc4M", "secrat")

console.log(verifiedToken)