import { Button, Space } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
function App() {
  return (
    <div>
      hello app
      <br />
      <Space>
        <Button
          type="primary"
          icon={<PlusCircleFilled />}
        >
          按钮
        </Button>
        <PlusCircleFilled />
      </Space>
    </div>
  );
}
export default App;
