import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <button onClick={() => setCounter(counter - 1)} 
            style={{display: 'inline', padding: '15px', background: 'red'}}>-</button>
        <h1 style={{display: 'inline'}}>{counter}</h1>
        <button
        onClick={() => setCounter(counter + 1)} 
        style={{display: 'inline', padding: '15px', background: 'red'}}>+</button>
    </div>
  )
}

export default Counter