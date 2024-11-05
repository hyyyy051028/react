import { useState, lazy, Suspense } from 'react';
//import MyHead from "./04_MyHead.jsx"

const MyHead = lazy(() => import('./04_MyHead.jsx')); // 这个时机不加载的

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      hello App
      <button onClick={() => setShow(true)}>点击</button>
      <Suspense fallback={<div>loading...</div>}>{show && <MyHead />}</Suspense>
    </div>
  );
}
export default App;
