import { useState } from 'react'
import './App.css'

function App() {
  

  const [count, setCount] = useState(Number(localStorage.getItem('count')))
  
  const saveCount = (newCount: Number) => {
    localStorage.setItem("count", newCount.toString());
  } 

  const handleDecrease = () => {
    const newCount = count - 1
    setCount(newCount)
    saveCount(newCount);
  }

  const handleReset = () => {
    setCount(0)
    saveCount(0);
  }

  const handleIncrease = () => {
    const newCount = count + 1
    setCount(newCount)
    saveCount(newCount);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Counter</h1>
        <span>{count}</span>
        <div className="buttons">
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleReset}>RESET</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App
