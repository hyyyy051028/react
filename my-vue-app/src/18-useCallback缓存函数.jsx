import { useState, memo, useMemo, useCallback } from 'react';
const Head = memo(function Head() {
  return <div> hello Head,{Math.random()}</div>;
});
function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('hello react');
  const fn = () => {
    console.log(msg);
  };
  //   const list=[msg.toLowerCase(),msg.toUpperCase()]
  //   const fn = useMemo(() => ()=>{console.log(msg)}, [msg]);   等价下面使用usecallback
  const fn = useCallback(() => {
    console.log(msg);
  }, [msg]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      <Head fn={fn} />
    </div>
  );
}
export default App;
