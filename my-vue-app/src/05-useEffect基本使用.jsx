// import { useRef, useEffect } from 'react';

// function App() {
//   const ref = useRef(null);

//   // setTimeout(()=>{
//   //     ref.current.focus()
//   // },3000)

//   const handleClick = () => {
//     ref.current.focus();
//   };
//   //可以在初始的的时候进行副作用操作
//   //触发的时机：JSX渲染之后出发的
//   useEffect(() => {
//     ref.current.focus();
//   });

//   return (
//     <div>
//       hello App
//       <button onClick={handleClick}>点击</button>
//       <input
//         type="text"
//         ref={ref}
//       />
//     </div>
//   );
// }
// export default App;
import { useRef, useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  //初始渲染和更新渲染都会触发useEffect()->因为u=每次渲染JSX后都会触发useEffect(),整个当前函数组件作用域的最后时机触发的
  useEffect(() => {
    console.log(123);
  });
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      hello App
      <button onClick={handleClick}>点击</button>
      {count}
    </div>
  );
}
export default App;
