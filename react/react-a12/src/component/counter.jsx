import { useState, useEffect } from 'react'

function Counter() {
  const [counter, setCounter] = useState( 0 ) 

  useEffect(() => {
    console.log('Counter value:', counter)
  }, [counter])

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  let updatecounter = () => {
    setCounter(0)
    console.log("counter reset")

  }

  return (
    <div>
      <h1>Counter: { counter } </h1>
      <button onClick={handleIncrement} >Increment +1</button>  
      <button onClick={handleDecrement}>Decrement -1</button>  
      <button onClick={updatecounter}>reset</button>
    </div>  
  );
}

export default Counter;