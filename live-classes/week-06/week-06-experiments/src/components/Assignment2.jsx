import { useEffect, useState } from "react";

function Assignment2() {

    const [id, setId] = useState(1)

    return (<div>
        <button onClick={() => {
            setId(id + 1)
        }}>Next</button>
        <Todo id={id} />
    </div>
    )
}

function Todo({ id }) {
    const [todo, setTodo] = useState({})

    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todo?id=" + id)
            .then(async (res) => {
                const json = await res.json()
                setTodo(json.todo)
            })
    }, [id])

    return <div>
        <h4>
            {todo.title}
        </h4>
        <h5>
            {todo.description}
        </h5>
    </div>
}

export default Assignment2;