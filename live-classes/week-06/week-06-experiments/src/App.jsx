
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState("My Name is krishna ")
  
  return (
    <div>
      {/* <HeaderWithButton /> */}
      <button style={{ margin: "20px" }} onClick={() => (setNum("My Name is " + Math.random()))}>Clik me to update Name</button>
      <Header title={num} />
      <Header title="My Name is Krishna" />
      <Header title="My Name is Krishna" />
      <Header title="My Name is Krishna" />
    </div>
  )
}

//below method is for preventing re-rendring
// function HeaderWithButton() {
//   const [num, setNum] = useState("My Name is krishna ")
//   return<>
//     <button style={{ margin: "20px" }} onClick={() => (setNum("My Name is " + Math.random()))}>Clik me to update Name</button>
//     <Header title={num} />
//   </>
// }

const Header=React.memo(function ({title}) {
  return <div>
    {title}
  </div>
}
)
export default App
