
const express = require('express')
const fs= require("fs")
const app = express()
const port = 3000
const bodyParser = require("body-parser")

function sum(n){
  let ans=0;
  for(let i=1;i<n;i++){
    ans+=i
  }
  return ans;
}


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.use(bodyParser.json())

// app.post('/data',(req, res) => {
//   console.log(req.headers["authorization"])
//   console.log(req.headers)
//   console.log(req.body)
//   res.send({
//     msg: "2+2 = 4"
//   })
// })

// app.post("/backend-api/conv",()=>{
// const msg= req.body.message
// console.log(msg)
// res.json({
//   output:"2+ 2 is four"
// })
// })

// we can take input form url through query parameter

app.get('/sum',(req,res)=>{
  let n = req.query.n;
let ans = sum(n)
res.send("Hi ypur answer is "+ ans)
})

//Read file

app.get('/files/:fileName',(req,res)=>{
  const name= req.params.fileName;
fs.readFile(name,"utf-8",function(error,data){
res.send(data)
})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

