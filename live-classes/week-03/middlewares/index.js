
const express = require("express")
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

app.use(express.json())

app.send('/check',(req,res)=>{
    const kidneys=req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " +kidneyLength+ "kidnesy")
})
app.listen(port,()=>{
    console.log("Server is up......")
})