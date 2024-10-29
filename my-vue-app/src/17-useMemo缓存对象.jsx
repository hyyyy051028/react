import { useState, memo, useMemo } from 'react';
const Head = memo(function Head() {
  return <div> hello Head,{Math.random()}</div>;
});
function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('hello react');
  //   const list=[msg.toLowerCase(),msg.toUpperCase()]
  const list = useMemo(() => [msg.toLowerCase(), msg.toUpperCase()], [msg]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      <Head list={list} />
    </div>
  );
}
export default App;
