
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



// const request = require('supertest');
// const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;
app.use(express.json())
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
    console.log("Set Interval")
}, 3000)

app.use(function(req, res, next) {
  const userId = req.headers["user-id"];

  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
    if (numberOfRequestsForUser[userId] > 3) {
      res.status(404).send("no entry");
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
})


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000,()=>{
  console.log("server is up")
})






