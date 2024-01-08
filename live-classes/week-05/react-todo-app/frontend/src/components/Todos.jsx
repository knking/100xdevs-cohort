
export function Todos({ todos }) {
    return <div>
        {
            todos.map(function (todo) {
                return <div>
                    <p>{todo.title}</p>
                    <p>{todo.description}</p>
                    <button>{todo.completed == true ? "Completed": "Mark as Completed"}</button>
                </div>
            })
        }
    </div>
}