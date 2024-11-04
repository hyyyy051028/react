/* import { useBoolean } from 'ahooks'

function App() {
  
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true)

  return (
    <div>
      hello App
      <br />
      <button onClick={toggle}>toggle</button>
      <button onClick={setTrue}>setTrue</button>
      <button onClick={setFalse}>setFalse</button>
      <br />
      { state + '' } 
    </div>
  )
}
export default App */

import { useToggle } from 'ahooks';

function App() {
  const [state, { toggle, setLeft, setRight, set }] = useToggle(
    'hello',
    'world'
  );

  return (
    <div>
      hello App
      <br />
      <button onClick={toggle}>toggle</button>
      <button onClick={setLeft}>setLeft</button>
      <button onClick={setRight}>setRight</button>
      <button onClick={() => set('hi')}>set</button>
      <br />
      {state + ''}
    </div>
  );
}
export default App;
