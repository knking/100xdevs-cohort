import React, { memo, useCallback, useState } from 'react'

function UseCallBack() {
    const [count, setCount] = useState(0)

    const inputFunction = useCallback(() => {
        console.log("Hi there")
    }, [])
    return (
        <div>
            <Button inputFunction={inputFunction} />
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

const Button = memo(({inputFunction})=>{
console.log("Child render")

return <div>
    <button>Button clicked</button>
</div>
})


export default UseCallBack