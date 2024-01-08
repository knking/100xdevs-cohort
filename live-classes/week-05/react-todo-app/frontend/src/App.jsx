import { useState } from 'react'

import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos")

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={[{
          title: "GYM",
          description: "goto gym",
          completed: false
        }


        ]} />
      </div>
    </>
  )
}

export default App
