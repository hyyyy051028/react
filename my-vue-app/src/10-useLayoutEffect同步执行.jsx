// import { useEffect, useLayoutEffect, useRef } from 'react';
// //uselayoutrffect在useEffect之前触发
// function App() {
//   const ref = useRef(null);
//   useEffect(() => {
//     console.log(1, ref.current);
//   });

//   useLayoutEffect(() => {
//     console.log(2, ref.current);
//   });

//   return
//   <div ref={ref}>hello app</div>;
// }
// export default App;
// import { useEffect, useState } from 'react';
// //uselayoutrffect在useEffect之前触发
// function App() {
//   const [msg, setMsg] = useState('hello app');

//   useEffect(() => {
//     for (let i = 0; i < 1000000; i++) {
//       setMsg('app hello ');
//     }
//   });

//   return <div>{msg}</div>;
// }
// export default App;
import { useLayoutEffect, useState } from 'react';
//uselayoutrffect在useEffect之前触发
function App() {
  const [msg, setMsg] = useState('hello app');

  useLayoutEffect(() => {
    for (let i = 0; i < 1000000; i++) {
      setMsg('app hello ');
    }
  });

  return <div>{msg}</div>;
}
export default App;
