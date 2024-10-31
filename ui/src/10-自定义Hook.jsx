/* import { useEffect } from "react"
import { useState } from "react"

function useMouse() {
  const [state, setState] = useState({
    pageX: NaN,
    pageY: NaN
  })
  useEffect(() => {
    function move(e) {
      setState({
        pageX: e.pageX,
        pageY: e.pageY
      })
    }
    document.addEventListener('mousemove', move)
    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return state
}


function App() {
  const mouse = useMouse()
  return (
    <div>
      hello App, { mouse.pageX }, { mouse.pageY }
    </div>
  )
}
export default App */

import { useMouse } from 'ahooks';

function App() {
  const mouse = useMouse();
  return (
    <div>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      <p>ppp</p>
      hello App, {mouse.pageX}, {mouse.pageY}, {mouse.clientX}, {mouse.clientY}
    </div>
  );
}
export default App;
