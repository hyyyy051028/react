/* import { useRequest } from 'ahooks'
import axios from 'axios'

async function getData() {
  const res = await axios.get('/cartData.json')
  return res.data.list
}

function App() {
  const { data, error, loading } = useRequest(getData)
  if (error) {
    return <div>{ error.message }</div>
  }
  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div>
      hello App
      <ul>
        { data.map((item) => <li key={item.id}>{item.name}</li>) }
      </ul>
    </div>
  )
}
export default App */

/* import { useRequest } from 'ahooks'
import axios from 'axios'
import { useState } from 'react'

async function getData(num1, num2) {
  console.log(num1, num2)
  const res = await axios.get('/cartData.json')
  return res.data.list
}

function App() {
  const [data, setData] = useState([])
  const { run, error, loading, refresh } = useRequest(getData, {
    manual: true,
    onSuccess(ret, params) {
      console.log(params)
      setData(ret)
    }
  })
  if (error) {
    return <div>{ error.message }</div>
  }
  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div>
      hello App
      <button onClick={() => run(123, 456)}>点击</button>
      <button onClick={refresh}>刷新</button>
      <ul>
        { data.map((item) => <li key={item.id}>{item.name}</li>) }
      </ul>
    </div>
  )
}
export default App */

/* import { useRequest } from 'ahooks'
import axios from 'axios'

async function getData() {
  const res = await axios.get('/cartData.json')
  return res.data.list
}

function App() {
  const { data, error, loading, mutate } = useRequest(getData)
  if (error) {
    return <div>{ error.message }</div>
  }
  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div>
      hello App
      <button onClick={ () => mutate([{"id": 1, "name": "榴莲"}]) }>修改数据</button>
      <ul>
        { data.map((item) => <li key={item.id}>{item.name}</li>) }
      </ul>
    </div>
  )
}
export default App */

import { useRequest } from 'ahooks';
import { useState } from 'react';

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
  const { data, error, loading } = useRequest(() => fetchChat(title), {
    refreshDeps: [title],
  });
  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      hello Chat
      <ul>
        {data.map((item) => (
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
      hello App
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
