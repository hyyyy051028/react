import { useRef, useEffect, useState } from 'react';

function Chat({ title, theme }) {
  useEffect(() => {
    console.log('进入', title);
    console.log('主题', theme);
    return () => {
      console.log('退出', title);
    };
  }, [title, theme]);
  return <div>hello Chat</div>;
}
function App() {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState('情感聊天室');
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    setShow(false);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChange2 = (e) => {
    setIsDark(e.target.checked);
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
      <input
        type="checkbox"
        checked={isDark}
        onChange={handleChange2}
      />
      黑暗主题
      {show && (
        <Chat
          title={title}
          theme={isDark ? 'dark' : 'light'}
        />
      )}
    </div>
  );
}
export default App;
//useEffect的请理操作
