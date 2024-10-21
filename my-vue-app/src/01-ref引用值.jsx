// import { useState } from 'react';
// function App() {
//   const [count, setCount] = useState(0);
//   let num = 0;
//   const handleClick = () => {
//     setCount(count + 1);
//     num++;
//     console.log(num);
//   };
//   return (
//     <div>
//       hello App
//       <button onClick={handleClick}>计数</button>
//       <br />
//       {count}
//     </div>
//   );
// }
// export default App;
import { useState, useRef } from 'react';
function App() {
  const [count, setCount] = useState(0);
  let num = useRef(0);
  const handleClick = () => {
    setCount(count + 1);
    num.current++;
    console.log(num.current);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>计数</button>
      <br />
      {count}
    </div>
  );
}
export default App;
