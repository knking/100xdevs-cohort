import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './componrnts/Todo'
let count = 4
function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: "Gym",
      description: "Go to Gym"
    },
    {
      id:2,
      title: "Eat",
      description: "Go to Eat"
    }, {
      id:3,
      title: "sleep",
      "description": "Go to sleep"
    }
  ])

  function addTodo(){
    setTodos([...todos,{
      id:count++,
      title:Math.random(),
      description:Math.random()
    }
   ])
  }
  return (
    
    <>
    <button onClick={addTodo}>Add Todo</button>
      {
        todos.map(todo=> <Todo id={todo.id} title={todo.title} description={todo.description}/>)
      }
      {/* {
        todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}/>
        })
      } */}
    </>
  )
}
function Todo({ id ,title, description }) {
  return <div>
    <h3>{id}</h3>
    <h4>{title}</h4>
    <h5>{description}</h5>
  </div>

}

export default App
