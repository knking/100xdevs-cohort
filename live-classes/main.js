
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
    

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


const todo = [{
  "id": 5,
  "title": "priya@gmail.com",
  "description": "123321"
}]

app.get('/todos', (req, res) => {
  res.status(200).json(todo)
})

app.get('/todos/:id', (req, res) => {
  // const id = parseInt(req.params.id)
  // const ans = todo.find((data)=>{
  // return data.id===id;
  // })
  // res.status(200).json(ans)

  const ans = todo.find(t => t.id === parseInt(req.params.id));
  if (!ans) {
    res.status(404).send("No TODO");
  } else {
    res.json(ans);
  }
})

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 10 + 1),
    title: req.body.title,
    description: req.body.description
  }
  todo.push(newTodo)
  res.status(200).json(todo)
})

app.put("/todos/:id",(req,res)=>{
  const id = parseInt(req.params.id) 
  let item = todo.find((data)=>{
    return data.id ===id
  })
 if(!item){
  return res.status(400).send("No todo")
 }
  item.title = req.body.title
  item.description=req.body.description
  item.completed=true

  return res.json(todo)
})

app.delete('/todos/:id',(req,res)=>{
  const todoIndex= todo.findIndex(t => t.id === parseInt(req.params.id))
  if(todoIndex === -1){
    res.status(404).send("No Todo")
  }else{
    todo.splice(todoIndex,1)
    res.send(todo)
  }
})

app.use((req, res, next) => {
  res.status(404).send();
});


app.listen(3000, () => {
  console.log("Server is Up and running...")
})
