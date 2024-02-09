
// - Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
//  - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
//  - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
//  - To test, go to the 02-jwt folder and run `npx jest ./tests`

const jwt = require("jsonwebtoken")
const zod = require("zod")

const jwtPassword = "mypsd"
const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)

function signnJwt(username, password) {
    const emailResponce = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)
    if (!emailResponce.success || !passwordResponse.success) {
        return null
    }
    const token = jwt.sign({ username }, jwtPassword)
    return token
}

const token = signnJwt("abc123@gmail.com", "krns")
// console.log(token)

function decodeJwt(token) {
    const decoded = jwt.decode(token)
    if (decoded) {
        return true
    } else {
        return false
    }
}

function verifyJwt(token) {
    let ans = true
    try {
        jwt.verify(token, jwtPassword)
    } catch (error) {
        ans = false
    }
    return ans
}

const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYzEyM0BnbWFpbC5jb20iLCJpYXQiOjE3MDc0NjE3MTF9.LU5x8vbECGb9vyEtSimKStjZFdUB60T0FIfqLEdCQKg")
console.log(ans)