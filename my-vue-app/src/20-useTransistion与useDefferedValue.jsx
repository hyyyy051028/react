import { useState, useTransition } from 'react';

function List({ query }) {
  const items = [];
  const word = 'hello world';
  if (query !== '' && word.includes(query)) {
    const arr = word.split(query);
    for (let i = 0; i < 20000; i++) {
      items.push(
        <li key={i}>
          {arr[0]}
          <span style={{ color: 'red' }}>{query}</span>
          {arr[1]}
        </li>
      );
    }
  } else {
    for (let i = 0; i < 20000; i++) {
      items.push(<li key={i}>{word}</li>);
    }
  }
  return <ul>{items}</ul>;
}

function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [pending, startTransition] = useTransition();
  const handleChange = (e) => {
    // 1. 紧急
    setSearch(e.target.value);
    // 2. 非紧急
    startTransition(() => {
      setQuery(e.target.value);
    });
  };
  return (
    <div>
      hello App
      <input
        type="text"
        value={search}
        onChange={handleChange}
      />
      {pending && <div>loading...</div>}
      <List query={query} />
    </div>
  );
}
export default App;

// import { useState, useDeferredValue } from 'react';

// function List({ query }) {
//   const items = [];
//   const word = 'hello world';
//   if (query !== '' && word.includes(query)) {
//     const arr = word.split(query);
//     for (let i = 0; i < 20000; i++) {
//       items.push(
//         <li key={i}>
//           {arr[0]}
//           <span style={{ color: 'red' }}>{query}</span>
//           {arr[1]}
//         </li>
//       );
//     }
//   } else {
//     for (let i = 0; i < 20000; i++) {
//       items.push(<li key={i}>{word}</li>);
//     }
//   }
//   return <ul>{items}</ul>;
// }

// function App() {
//   const [search, setSearch] = useState('');
//   // 得到对应search一样的值，只不过是一个延迟的副本
//   const query = useDeferredValue(search);
//   const handleChange = (e) => {
//     setSearch(e.target.value);
//   };
//   return (
//     <div>
//       hello App
//       <input
//         type="text"
//         value={search}
//         onChange={handleChange}
//       />
//       <List query={query} />
//     </div>
//   );
// }
// export default App;
