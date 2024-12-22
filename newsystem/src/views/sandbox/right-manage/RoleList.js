import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Tree } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import axios from 'axios';
const { confirm } = Modal;
export default function RoleList() {
  const [dataSource, setdataSource] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [rightList, setrightList] = useState([]);
  const [currentRights, setcurrentRights] = useState([]);
  const [currentId, setcurrentId] = useState([]);
  const confirmMethod = (item) => {
    confirm({
      title: '你确定要删除?',
      icon: <ExclamationCircleOutlined />,
      content: '删了就回不来了/终于放开爱回不来/',
      onOk() {
        deleteMethod(item);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const deleteMethod = (item) => {
    // console.log(item);

    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios.delete(`http://localhost:5000/roles/${item.id}`).then((res) => {
      const list = res.data;
    });
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id) => {
        return <b>{id}</b>;
      },
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
    },
    {
      title: '操作',
      render: (item) => {
        return (
          <div>
            <Button
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => confirmMethod(item)}
            />

            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => {
                setisModalOpen(true);
                setcurrentRights(item.rights);
                setcurrentId(item.id);
              }}
            />
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    axios.get('http://localhost:5000/roles').then((res) => {
      console.log(res.data);
      setdataSource(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:5000/rights?_embed=children').then((res) => {
      setrightList(res.data);
    });
  }, []);
  const handleOk = () => {
    setisModalOpen(false);
    setdataSource(
      dataSource.map((item) => {
        if (item.id === currentId) {
          return {
            ...item,
            rights: currentRights,
          };
        }
        return item;
      })
    );
    axios.patch(`http://localhost:5000/roles/${currentId}`, {
      rights: currentRights,
    });
  };
  const handleCancel = () => {
    setisModalOpen(false);
  };
  const onCheck = (checkKeys) => {
    setcurrentRights(checkKeys.checked);
  };
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(item) => item.id}
      ></Table>
      <Modal
        title="权限分配"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tree
          checkable
          checkedKeys={currentRights}
          treeData={rightList}
          onCheck={onCheck}
          checkStrictly={true}
        />
      </Modal>
    </div>
  );
}
