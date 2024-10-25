import { useEffect, useLayoutEffect, useInsertionEffect, useRef } from 'react';
function App() {
  const ref = useRef(null);

  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    .box {
  background: red;
  width :100px;
  height:100px ;
  }
  `;

    document.head.appendChild(style);
  });
  return (
    <div>
      hello app
      <div
        className="box"
        ref={ref}
      >
        aaaaaaaaaaaa
      </div>
    </div>
  );
}
export default App;
