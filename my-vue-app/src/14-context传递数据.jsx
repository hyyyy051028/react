// function App() {
//   return (
//     <div>
//       hello app
//       <Head count={123} />
//     </div>
//   );
// }
// function Head({ count }) {
//   return (
//     <div>
//       hello head
//       <Title count={123} />
//     </div>
//   );
// }
// function Title({ count }) {
//   return <div>hello title,{count}</div>;
// }
// export default App;
import { createContext, useContext, useState } from 'react';
const Context = createContext();
function App() {
  const [count, setCount] = useState(123);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello app
      <button onClick={handleClick}>点击</button>
      <Context.Provider value={count}>
        <Head />
      </Context.Provider>
    </div>
  );
}
function Head() {
  return (
    <div>
      hello head
      <Title />
    </div>
  );
}
function Title() {
  const value = useContext(Context);
  return <div>hello title,{value}</div>;
}
export default App;
