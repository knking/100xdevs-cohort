import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // }
//below usememo only hit when then is any change in inputvalue
  const total = useMemo(()=>{
    let ans = 0;
    for (let i = 0; i <= inputValue; i++) {
      ans = ans + i
    }
    return ans;
  },[inputValue])

  // function handleSum(){
  //   setCount(count+1)
  //   total(inputValue)
  // }

  return (
    <>
      <input type="text" value={inputValue} onChange={(event) => (setInputValue(event.target.value))} />

      <h4>Sum from 1 to {inputValue} is {total}</h4>
      <button onClick={()=>setCount(count + 1)}>Counter {count}</button>
    </>
  )
}

export default App
