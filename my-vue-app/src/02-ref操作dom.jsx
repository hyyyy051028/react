import { useRef } from 'react';
function App() {
  const myRef = useRef(null);
  const handleClick = () => {
    console.log(myRef.current.innerHTML);
    myRef.current.style.background = 'red';
  };
  return (
    <div>
      hello app
      <button onClick={handleClick}>点击</button>
      <div ref={myRef}> hello react</div>
    </div>
  );
}
export default App;
// import { useRef } from 'react';
// function App() {
//   const list = [
//     { id: 1, text: 'aaa' },
//     { id: 2, text: 'bbb' },
//     { id: 3, text: 'ccc' },
//   ];
//   const handleClick = () => {
//     console.log(myRef.current.innerHTML);
//     myRef.current.style.background = 'red';
//   };
//   return (
//     <div>
//       hello app
//       <button onClick={handleClick}>点击</button>
//       <ul>
//         {list.map((item) => (
//           <li
//             key={item.id}
//             ref={(myRef) => {
//               myRef.style.background = 'red';
//             }}
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;
