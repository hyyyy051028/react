import { useState } from 'react';
import { createPortal } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      hello App
      {createPortal(
        <p onClick={() => setCount(count + 1)}>这是一个段落, {count}</p>,
        document.querySelector('body')
      )}
    </div>
  );
}
export default App;
