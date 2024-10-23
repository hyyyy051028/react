// import { useRef, useEffect, useState } from 'react';
// function App() {
//   const [count, setCount] = useState(0);
//   const [msg, setMsg] = useState('hello React');
//   useEffect(() => {
//     console.log(count);
//   });
//   useEffect(() => {
//     console.log(msg);
//   });
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       hello App
//       <button onClick={handleClick}>点击</button>
//       {count},{msg}
//     </div>
//   );
// }
// export default App;
// import { useRef, useEffect, useState } from 'react';
// function App() {
//   const [count, setCount] = useState(0);
//   const [msg, setMsg] = useState('hello React');
//   //初始的时候，所有的useEffect都会出发
//   //更新的时候，只有对应依赖项发生改变的时候才能出发
//   useEffect(() => {
//     console.log(count);
//   }, [count]);
//   useEffect(() => {
//     console.log(msg);
//   }, [msg]);
//   //当空数组时，初始才能出发，不然不会出发

//   useEffect(() => {
//     console.log(123);
//   }, []);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       hello App
//       <button onClick={handleClick}>点击</button>
//       {count},{msg}
//     </div>
//   );
// }
// export default App;
import { useRef, useEffect, useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('hello React');
  //初始的时候，所有的useEffect都会出发
  //更新的时候，只有对应依赖项发生改变的时候才能出发
  useEffect(() => {
    console.log(count);
  }, [count]);
  useEffect(() => {
    console.log(msg);
  }, [msg]);
  //当空数组时，初始才能出发，不然不会出发

  useEffect(() => {
    console.log(123);
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      {count},{msg}
    </div>
  );
}
export default App;
