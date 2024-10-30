import { Switch, Rate } from 'antd';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState(3);
  return (
    <div>
      hello App
      <br />
      <Switch
        checked={checked}
        onChange={setChecked}
      />{' '}
      {checked ? '启动' : '关闭'}
      <Rate
        value={value}
        onChange={setValue}
      />{' '}
      {value}
    </div>
  );
}
export default App;
