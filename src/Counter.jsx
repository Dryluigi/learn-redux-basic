import { useState } from 'react'

function Counter() {
    // State: a counter value
    const [counter, setCounter] = useState(0)
  
    // Action: code that causes an update to the state when something happens
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1)
    }
  
    // View: the UI definition
    return (
      <div>
        Value: {counter} <button onClick={increment}>Increment</button>
      </div>
    )
}

export default Counter
