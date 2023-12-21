
const express = require("express")
const zod = require("zod")
const mySchema = zod.array(zod.number())
const app =express()

const port =3000

// app.get('/health-checkup',(req,res)=>{
//     const kidneyId= req.query.kidneyId;
//     const username=req.headers.username;
//     const pass = req.headers.pass
//     if(username !="krishna" && pass!="pass"){
//         res.status(403).json({
//             msg:"User does not exist"
//         })
//         return
//     }
//     if(kidneyId !=1 && kidneyId != 2){
//         res.status(401).json({
//             msg:"Wrong input"
//         })
//         return
//     }
//     res.send("Your heart is healthy")
// })

//example 2

// app.use(express.json())
// app.post('/check',(req,res)=>{
//     const kidneys=req.body.kidneys;
//     const kidneyLength = kidneys.length;
// // if(!kidneys){
// //     res.json({
// //         msg:"Please use valid value"
// //     })
// //     return
// // }
//     res.send("You have " +kidneyLength + " kidnesy")
// })

// app.use((err,req,res,next)=>{
// res.json({
//     msg:"Wrong input bro"
// })
// })

// ZOD Example 

app.use(express.json())
app.post('/health-check',(req,res)=>{
const kidneys=req.body.kidneys;
const response = mySchema.safeParse(kidneys)
res.send({
    response
})

})
app.listen(port,()=>{
    console.log("Server is up......")
})