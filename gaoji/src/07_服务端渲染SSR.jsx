import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      hello App
      <br />
      <button onClick={() => setCount(count + 1)}>点击</button> {count}
    </div>
  );
}
export default App;
