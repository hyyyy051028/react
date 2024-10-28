import { useState, memo } from 'react';
const Head = memo(function Head() {
  return <div> hello Head,{Math.random()}</div>;
});
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      <Head />
    </div>
  );
}
export default App;
