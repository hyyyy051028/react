import { useState, startTransition } from 'react';
function List({ query }) {
  const items = [];
  const word = 'hello world';
  if (query !== '' && word.includes(query)) {
    const arr = word.split(query);

    for (let i = 0; i < 10000; i++) {
      items.push(
        <li key={i}>
          {arr[0]}
          <span style={{ color: 'red' }}>{query}</span>
          {arr[1]}
        </li>
      );
    }
  } else {
    for (let i = 0; i < 10000; i++) {
      items.push(<li key={i}>{word}</li>);
    }
  }
  return <ul>{items}</ul>;
}
function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    //紧急任务
    setSearch(e.target.value);
    //非紧急任务
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
      <List query={query} />
    </div>
  );
}
export default App;
