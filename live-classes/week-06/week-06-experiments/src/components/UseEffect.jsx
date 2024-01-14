import React, { useEffect, useState } from "react";



 function UseEffect() {

    const [todos, setTodo] = useState([])

   
         useEffect(() => {

            setInterval(()=>{
                fetch("https://sum-server.100xdevs.com/todos")
                .then(async (val) => {
                  const json=await val.json()
                  setTodo(json.todos)
                })
            },2000)
       

        //     async function data(){
        //         const ans = await fetch("https://sum-server.100xdevs.com/todos")
        //         const todo =  await ans.json()
        //         console.log(todo.todos)
        //     }
        //   data()
    }, [])
    return <>
        {
            todos.map(({title,description,id})=> <Todo key={id} title={title} description={description}/>)
        }

    </>
}

function Todo({title,description}){
    return <div>
        <h4>
            {title}
        </h4>
        <h5>
            {description}
        </h5>
    </div>
}

export default UseEffect;