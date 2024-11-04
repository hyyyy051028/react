// import { useHistoryTravel } from 'ahooks';

// function App() {
//   const {
//     value = '',
//     setValue,
//     backLength,
//     forwardLength,
//     back,
//     forward,
//   } = useHistoryTravel();
//   return (
//     <div>
//       hello App
//       <br />
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button
//         disabled={backLength <= 0}
//         onClick={back}
//       >
//         后退
//       </button>
//       <button
//         disabled={forwardLength <= 0}
//         onClick={forward}
//       >
//         前进
//       </button>
//       <br />
//       {value}
//     </div>
//   );
// }
// export default App;
import { useDynamicList } from 'ahooks';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
function App() {
  const { list, remove, insert, replace } = useDynamicList(['David', 'Jack']);
  return (
    <div>
      hello App
      <br />
      {list.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => replace(index, e.target.value)}
            />
            <MinusCircleOutlined onClick={() => remove(index)} />
            <PlusCircleOutlined onClick={() => insert(index + 1, '')} />
          </div>
        );
      })}
      <br />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
