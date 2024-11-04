
//import { useBoolean } from 'ahooks'
//import { useHover } from "ahooks"

import { useState, useRef, useEffect } from "react"
function useBoolean(defaultValue = false) {
  const [state, setState] = useState(!!defaultValue)
  const actions = {
    toggle() {
      setState(!state)
    },
    setTrue() {
      setState(true)
    },
    setFalse() {
      setState(false)
    }
  }
  return [state, actions]
}

function useHover(target) {
  const [state, {setTrue, setFalse}] = useBoolean(false)
  useEffect(() => {
    target.current.addEventListener('mouseenter', setTrue)
    target.current.addEventListener('mouseleave', setFalse)
    return () => {
      target.current.removeEventListener('mouseenter', setTrue)
      target.current.removeEventListener('mouseleave', setFalse)
    }
  }, [])
  return state
}

function App() {
  const [state, {toggle, setTrue, setFalse}] = useBoolean(true)
  const ref = useRef(null)
  const isHover = useHover(ref)
  return (
    <div>
      hello App
      <br />
      <button onClick={toggle}>点击1</button>
      <button onClick={setTrue}>点击2</button>
      <button onClick={setFalse}>点击3</button>
      <br />
      { state + '' }
      <div ref={ref}>aaaaaaaaa</div> { isHover ? '移入' : '移开' }
    </div>
  )
}
export default App