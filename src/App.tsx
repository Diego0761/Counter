import { useState } from 'react'
import './App.css'

function App() {
  

  const [count, setCount] = useState(Number(localStorage.getItem('count')))
  
  const saveCount = (newCount: Number) => {
    localStorage.setItem("count", newCount.toString());
  } 

  const handleDecrease = (amount: number) => {
    const newCount = count - amount
    setCount(newCount)
    saveCount(newCount);
  }

  const handleReset = () => { 
    setCount(0)
    saveCount(0);
  }

  const handleIncrease = (amount: number) => {
    const newCount = count + amount
    setCount(newCount)
    saveCount(newCount);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Counter</h1>
        <span>{count}</span>
        <div className="buttons">
          <button onClick={() => handleDecrease(10)}> -10 </button>
          <button onClick={() => handleDecrease(1)}> - </button>
          <button onClick={handleReset}>RESET</button>
          <button onClick={() => handleIncrease(1)}> + </button>
          <button onClick={() => handleIncrease(10)}> +10 </button>
        </div>
      </div>
    </div>
  )
}

export default App
