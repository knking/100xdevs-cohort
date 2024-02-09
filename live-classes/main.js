
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
// 2.GET /todos/:id - Retrieve a specific todo item by ID
//     Description: Returns a specific todo item identified by its ID.
//     Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
//     Example: GET http://localhost:3000/todos/123

const express = require("express")
const app = express()

app.use(express.json())

function isOlsEnaughMiddleware(req,res,next){
  const age = req.query.age
  if (age > 14) {
    next()
  } else {
    res.json({
      msg: "You are not allowd for riden in Ride "
    })
  }
}
app.use(isOlsEnaughMiddleware)

app.get("/ride1",(req, res) => {
  res.status(200).json({
    msg: "You have successfully riden in Ride one,Enjoy"
  })
})

app.get("/ride2",(req, res) => {
  res.status(200).json({
    msg: "You have successfully riden in Ride two,Enjoy"
  })
})

app.listen(3000, () => {
  console.log("Server is Up")
})