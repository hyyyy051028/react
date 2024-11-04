import { useRef, useEffect, useState } from "react"

function useUpdateEffect(effect, deps) {
  const isMounted = useRef(false)
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])
  useEffect(() => {
    if(!isMounted.current) {
      isMounted.current = true
    }
    else {
      effect()
    }
  }, deps)
}

function App() {

  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(()=> {
    console.log(123)
  }, [count])

  useUpdateEffect(()=> {
    console.log(456)
  }, [count])

  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      { count }
    </div>
  )
}
export default App