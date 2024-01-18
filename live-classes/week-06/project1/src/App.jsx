import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  const [ans, setAns] = useState(0)

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // }

  function total(inputValue) {
    let ans = 0;
    for (let i = 0; i <= inputValue; i++) {
      ans = ans + i
    }
    setAns(ans)
  }

  function handleSum(){
    setCount(count+1)
    total(inputValue)
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={(event) => (setInputValue(event.target.value))} />

      <h4>Sum is {ans}</h4>
      <button onClick={handleSum}>Counter {count}</button>
    </>
  )
}

export default App
