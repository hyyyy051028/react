// import { useRef, useEffect, useState } from 'react';
// function App() {
//     const [count,setCount]=useState(0)
// const foo=useCallback(()=>{
//     console.log(count)
// },[count])
//     useEffect(()=>{
// foo()
//     },[foo])
//   return <div>hello App</div>;
// }
// export default App;
import { useRef, useEffect, useState } from 'react';
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const foo = () => {
      console.log(count);
    };
  }, [count]);
  return <div>hello App</div>;
}
export default App;
