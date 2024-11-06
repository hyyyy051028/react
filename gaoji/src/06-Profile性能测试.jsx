import { useState, Profiler } from 'react';

function Head({ count }) {
  return <div>hello Head, {count}</div>;
}

function App() {
  const [count, setCount] = useState(0);
  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  };
  return (
    <div>
      hello App
      <button onClick={() => setCount(count + 1)}>点击</button>
      {count}
      <Profiler
        id="Head"
        onRender={onRender}
      >
        <Head count={count} />
      </Profiler>
    </div>
  );
}
export default App;
