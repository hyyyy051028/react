/* import { useState, useRef } from "react"
import { flushSync } from "react-dom"

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const handleClick = () => {
    flushSync(() => {
      setCount(count + 1)
    })
    console.log( ref.current.innerHTML )  // 像vue中nextTick
  }
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      <div ref={ref}>{ count }</div>
    </div>
  )
}

export default App */


import { useState, useRef } from "react"
import { flushSync } from "react-dom"

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const handleClick = () => {
    flushSync(() => {
      setCount(count + 1)
    })
    flushSync(() => {
      setCount2(count2 + 1)
    })
  }
  console.log(123)
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      <div>{ count }, { count2 }</div>
    </div>
  )
}

export default App