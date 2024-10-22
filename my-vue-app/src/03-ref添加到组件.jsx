import { useRef, forwardRef } from 'react';
const MyInput = forwardRef(function MyInput(props, ref) {
  return (
    <input
      type="text"
      ref={ref}
    />
  );
});
function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
    ref.current.style.background = 'red';
  };
  return (
    <div>
      hello app
      <button onClick={handleClick}>点击</button>
      <MyInput ref={ref} />
    </div>
  );
}
export default App;
