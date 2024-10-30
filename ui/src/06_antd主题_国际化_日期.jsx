/* import { Button, Checkbox, Space, ConfigProvider } from 'antd'

function App() {
  return (
    <div>
      hello App
      <br />
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#00ff00'
        }
      }}>
        <Space>
          <Button type="primary">按钮</Button>
          <Checkbox checked />全选
        </Space>
      </ConfigProvider>
      <br />
      <ConfigProvider theme={{
        token: {
          Button: {
            colorPrimary: '#00ff00'
          }
        }
      }}>
        <Space>
          <Button type="primary">按钮</Button>
          <Checkbox checked />全选
        </Space>
      </ConfigProvider>
    </div>
  )
}
export default App */

import { Button, Checkbox, Space, ConfigProvider } from 'antd';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState({});
  const handleClick1 = () => {
    setTheme({
      token: {
        colorPrimary: '#00ff00',
      },
    });
  };
  const handleClick2 = () => {
    setTheme({
      token: {
        colorPrimary: '#ff0000',
      },
    });
  };
  const handleClick3 = () => {
    setTheme({
      token: {
        colorPrimary: '#eb2f96',
      },
    });
  };

  return (
    <div>
      hello App
      <Button onClick={handleClick1}>浅绿主题</Button>
      <Button onClick={handleClick2}>火焰主题</Button>
      <Button onClick={handleClick3}>公主主题</Button>
      <br />
      <ConfigProvider theme={theme}>
        <Space>
          <Button type="primary">按钮</Button>
          <Checkbox checked />
          全选
        </Space>
      </ConfigProvider>
    </div>
  );
}
export default App;

/* import { ConfigProvider, Calendar } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

function App() {

  return (
    <div>
      hello App
      <ConfigProvider locale={zhCN}>
        <Calendar />
      </ConfigProvider>
    </div>
  )
}
export default App */
