import { Button, Space, Tour } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import { useLocalStorageState } from 'ahooks';

function App() {
  const [open, setOpen] = useLocalStorageState('tour', { defaultValue: true });
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <div style={{ margin: '100px' }}>
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button
          ref={ref2}
          type="primary"
        >
          Save
        </Button>
        <Button
          ref={ref3}
          icon={<EllipsisOutlined />}
        />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
      />
    </div>
  );
}
export default App;
