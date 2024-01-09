const fs = require('fs');
// Example usage:
const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656076800000, price: 20, category: 'Clothing', itemName: 'T-shirt' },
    { id: 3, timestamp: 1656076800000, price: 15, category: 'Food', itemName: 'Burger' },
    { id: 4, timestamp: 1656076800000, price: 25, category: 'Electronics', itemName: 'Headphones' },
    { id: 5, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Ice Cream' }
];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);

// console.log(Object.keys(transactions[1]))
// console.log(Object.values(transactions[1]))
// const {category}= transactions[1]
// console.log(category)

// for (const iterator of transactions) {
//   console.log(Object.keys(iterator))
// }
// for(const key in transactions[2]){
//   console.log(key)
// }
// JavaScript (script.js)

// const currentDate = new Date();

// // Specify the options for formatting
// const options = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };

// // Format the date and time with AM/PM indicator
// const formattedTime = currentDate.toLocaleString('en-US', options);

// console.log(formattedTime);

const express = require('express');

const path = require('path');
const app = express();

app.get('/files', (req, res) => {
  fs.readdir(path.join(__dirname, './abc'), (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve files" })
    }
    res.status(200).json(files)
  })
})

app.get('/file/:filename', (req, res) => {
  const filePath = path.join(__dirname, './abc', req.params.filename)
  console.log(filePath)
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).send("File Not Found")
    }
    res.status(200).send(data)
  })
})

app.all("*",(req,res)=>{
  res.status(404).send("File Not Found")
})
app.listen(3000, () => {
  console.log("Server is up and Running...")
})
