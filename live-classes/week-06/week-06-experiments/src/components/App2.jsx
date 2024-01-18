import React, { useEffect, useState } from 'react'
import axios from "axios"

function App2() {

    const [id,setId] = useState(1)
    return (
        <div>
            <button  onClick={()=>setId(1)} style={{padding:"5px", margin:"5px"}}>1</button>
            <button  onClick={()=>setId(2)}  style={{padding:"5px",margin:"5px"}}>2</button>
            <button  onClick={()=>setId(3)}  style={{padding:"5px", margin:"5px"}}>3</button>
            <button  onClick={()=>setId(4)}  style={{padding:"5px", margin:"5px"}}>4</button>
            <Todo id={id} />
        </div>
    )
}

function Todo({ id }) {
    const [todo, setTodo] = useState({})
    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todo?id=" + id)
          .then(async function(res) {
            const json = await res.json();
            setTodo (json.todo);
          })

        //   axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        //   .then(response =>{
        //     setTodo(response.data.todo)
        //   })

      }, [id])


    return <div>
        {id}
        <h4>
            {todo.title}
        </h4>
        <h5>
            {todo.description}
        </h5>
    </div>

}
export default App2