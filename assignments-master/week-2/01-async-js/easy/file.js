
const fs = require('fs')

//reading a file
fs.readFile('abc.txt','utf-8',(error,data)=>{
if(error){
    console.log(error)
    return
}
console.log(data)
})

//writing a file
const content ="i am new string"
fs.writeFile('abc.txt', content,'utf-8',(error)=>{
    if(error){
        console.log(error)
        return
    }
    console.log('File successfuly written')
})