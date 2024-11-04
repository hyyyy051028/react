
/* import { useUpdateEffect } from 'ahooks'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  useUpdateEffect(() => {
    console.log('useUpdateEffect')
  })

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      hello App
      <br />
      <button onClick={handleClick}>点击</button>
    </div>
  )
}
export default App */


import { useInterval, useTimeout } from 'ahooks'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  useTimeout(() => {
    console.log(123)
    setCount(count + 1);
  }, 1000);

  return <div>count: {count}</div>
}
export default App