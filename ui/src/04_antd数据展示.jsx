import { Button, Table } from 'antd';
import { useImmer } from 'use-immer';

function App() {
  const [dataSource, setDataSource] = useImmer([
    {
      id: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      id: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'bind',
      key: 'bind',
      render(_, record) {
        //console.log( _ )  // 当前一条的字段数据
        console.log(record); // 当前一条的整体数据
        return (
          <Button
            type="primary"
            danger
            onClick={() => handleClick(record.id)}
          >
            删除
          </Button>
        );
      },
    },
  ];

  const handleClick = (id) => {
    setDataSource((draft) => {
      const index = draft.findIndex((item) => item.id === id);
      draft.splice(index, 1);
    });
  };

  return (
    <div>
      hello App
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}

export default App;
