// import { useRef, useEffect, useState } from 'react';
// function Chat({ title }) {
//   useEffect(() => {
//     console.log('进入', title);
//     return () => {
//       console.log('退出', title);
//     };
//   }, [title]);
//   return <div>hello Chat</div>;
// }
// function App() {
//   const [show, setShow] = useState(true);
//   const [title, setTitle] = useState('情感聊天室');
//   const handleClick = () => {
//     setShow(false);
//   };
//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   };
//   return (
//     <div>
//       hello app
//       <button onClick={handleClick}>关闭聊天室</button>
//       <select
//         value={title}
//         onChange={handleChange}
//       >
//         <option value="情感聊天室">情感聊天室</option>
//         <option value="体育聊天室">体育聊天室</option>
//       </select>
//       {show && <Chat title={title} />}
//     </div>
//   );
// }
// export default App;
// //useEffect的请理操作
// import { useRef, useEffect, useState } from 'react';
// function Chat({ title }) {
//   useEffect(() => {
//     console.log('进入', title);
//   }, [title]);
//   return <div>hello Chat</div>;
// }
// function App() {
//   const [show, setShow] = useState(true);
//   const [title, setTitle] = useState('情感聊天室');
//   const handleClick = () => {
//     setShow(false);
//   };
//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   };
//   return (
//     <div>
//       hello app
//       <button onClick={handleClick}>关闭聊天室</button>
//       <select
//         value={title}
//         onChange={handleChange}
//       >
//         <option value="情感聊天室">情感聊天室</option>
//         <option value="体育聊天室">体育聊天室</option>
//       </select>
//       {show && <Chat title={title} />}
//     </div>
//   );
// }
// export default App;
// //useEffect的请理操作
// import { useRef, useEffect, useState } from 'react';
// function fetchChat(title) {
//   const delay = title === '情感聊天室' ? 2000 : 200;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, text: title + '1' },
//         { id: 2, text: title + '2' },
//         { id: 3, text: title + '3' },
//       ]);
//     }, delay);
//   });
// }
// function Chat({ title }) {
//   const [list, setList] = useState([]);
//   useEffect(() => {
//     let ignore = false;
//     fetchChat(title).then((date) => {
//       if (!ignore) {
//         setList(date);
//       }
//     });
//     return () => {
//       ignore = true;
//     };
//   }, [title]);
//   return (
//     <div>
//       hello Chat
//       <ul>
//         {list.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// function App() {
//   const [show, setShow] = useState(true);
//   const [title, setTitle] = useState('情感聊天室');
//   const handleClick = () => {
//     setShow(false);
//   };
//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   };
//   return (
//     <div>
//       hello app
//       <button onClick={handleClick}>关闭聊天室</button>
//       <select
//         value={title}
//         onChange={handleChange}
//       >
//         <option value="情感聊天室">情感聊天室</option>
//         <option value="体育聊天室">体育聊天室</option>
//       </select>
//       {show && <Chat title={title} />}
//     </div>
//   );
// }
// export default App;
// //useEffect的请理操作
import { useRef, useEffect, useState } from 'react';
function fetchChat(title) {
  const delay = title === '情感聊天室' ? 2000 : 200;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: title + '1' },
        { id: 2, text: title + '2' },
        { id: 3, text: title + '3' },
      ]);
    }, delay);
  });
}
function Chat({ title }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    let ignore = false;
    async function fetchDate() {
      const date = await fetchChat(title);
      if (!ignore) {
        setList(date);
      }
    }
    fetchDate();

    return () => {
      ignore = true;
    };
  }, [title]);
  return (
    <div>
      hello Chat
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
function App() {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState('情感聊天室');
  const handleClick = () => {
    setShow(false);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      hello app
      <button onClick={handleClick}>关闭聊天室</button>
      <select
        value={title}
        onChange={handleChange}
      >
        <option value="情感聊天室">情感聊天室</option>
        <option value="体育聊天室">体育聊天室</option>
      </select>
      {show && <Chat title={title} />}
    </div>
  );
}
export default App;
//useEffect的请理操作
