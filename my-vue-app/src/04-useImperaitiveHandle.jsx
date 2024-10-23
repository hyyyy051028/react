import { useRef, forwardRef, useImperativeHandle } from 'react';
const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      foucusAndStyle() {
        inputRef.current.focus();
        inputRef.current.style.background = 'red';
      },
    };
  });
  return (
    <input
      type="text"
      ref={inputRef}
    />
  );
});
function App() {
  const ref = useRef(null);
  const handleClick = () => {
    // const ret = ref.current.focus();
    // console.log(ret);
    // ref.current.style.background = 'red';
    ref.current.foucusAndStyle();
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
