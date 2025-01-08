import React, { useEffect, useState, useRef } from 'react';
import { Table, Tag, Button, Modal, Popover, Switch, Form } from 'antd';
import axios from 'axios';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import UserForm from '../../../components/sandbox/user-manage/UserForm';

export default function UserList() {
  const { confirm } = Modal;
  const addForm = useRef(null);
  const updateForm = useRef(null);
  const [dataSource, setdataSource] = useState([]);
  const [isAddVisible, setisAddVisible] = useState(false);
  const [roleList, setroleList] = useState([]);
  const [regionList, setregionList] = useState([]);
  const [isUpdateVisible, setisUpdateVisible] = useState(false);
  const [isUpdateDisabled, setisUpdateDisabled] = useState(false);
  const [current, setcurrent] = useState(null);

  const { roleId, region, username } = JSON.parse(
    localStorage.getItem('token')
  );
  const roleObj = {
    1: 'superadmin',
    2: 'admin',
    3: 'editor',
  };
  useEffect(() => {
    // 定义 roleObj 作为常量对象
    const roleObj = {
      1: 'superadmin',
      2: 'admin',
      3: 'editor',
    };

    axios.get('/users?_expand=role').then((res) => {
      const list = res.data;
      setdataSource(
        roleObj[roleId] === 'superadmin'
          ? list
          : [
              ...list.filter((item) => item.username === username),
              ...list.filter(
                (item) =>
                  item.region === region && roleObj[item.roleId] === 'editor'
              ),
            ]
      );
    });
  }, [roleId, region, username]); // 只依赖 roleId, region 和 username

  useEffect(() => {
    axios.get('/regions').then((res) => {
      const list = res.data;
      setregionList(list);
    });
  }, []);
  useEffect(() => {
    axios.get('/roles').then((res) => {
      const list = res.data;
      setroleList(list);
    });
  }, []);
  const columns = [
    {
      title: '区域',
      dataIndex: 'region',
      filters: [
        ...regionList.map((item) => ({
          text: item.title,
          value: item.value,
        })),
        {
          text: '全球',
          value: '全球',
        },
      ],
      onFilter: (value, item) => {
        if (value === '全球') {
          return item.region === '';
        }
        return item.region === value;
      },
      render: (region) => {
        return <b>{region === '' ? '全球' : region}</b>;
      },
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      render: (role) => {
        return role?.roleName;
      },
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      render: (roleState, item) => {
        return (
          <Switch
            checked={roleState}
            disabled={item.default}
            onChange={() => handleChange(item)}
          ></Switch>
        );
      },
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
              disabled={item.default}
            />

            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              disabled={item.default}
              onClick={() => handleUpdate(item)}
            />
          </div>
        );
      },
    },
  ];
  const handleUpdate = (item) => {
    console.log(item);

    setTimeout(() => {
      setisUpdateVisible(true);
      if (item.roleId === '1') {
        setisUpdateDisabled(true);
      } else {
        setisUpdateDisabled(false);
      }
      if (updateForm.current) {
        updateForm.current.setFieldsValue(item);
      }
    }, 0);
    setcurrent(item);
  };

  const handleChange = (item) => {
    // console.log(item);
    item.roleState = !item.roleState;
    setdataSource([...dataSource]);
    axios.patch(`http://localhost:5000/users/${item.id}`, {
      roleState: item.roleState,
    });
  };
  const confirmMethod = (item) => {
    confirm({
      title: '你确定要删除?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        deleteMethod(item);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const deleteMethod = (item) => {
    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios.delete(`http://localhost:5000/users/${item.id}`).then((res) => {
      const list = res.data;
    });
  };
  const addFormOk = () => {
    {
      addForm.current
        .validateFields()
        .then((value) => {
          setisAddVisible(false);
          addForm.current.resetFields();
          axios
            .post(`http://localhost:5000/users`, {
              ...value,
              roleState: true,
              default: false,
            })
            .then((res) => {
              console.log(res.data);
              setdataSource([
                ...dataSource,
                {
                  ...res.data,
                  role: roleList.filter((item) => item.id === value.roleId)[0],
                },
              ]);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updateFormOk = () => {
    updateForm.current.validateFields().then((value) => {
      //
      setisUpdateVisible(false);
      setdataSource(
        dataSource.map((item) => {
          if (item.id === current.id) {
            return {
              ...item,
              ...value,
              role: roleList.filter((item) => item.id === value.roleId)[0],
            };
          }
          return item;
        })
      );
      setisUpdateDisabled(!isUpdateDisabled);
      axios.patch(`http://localhost:5000/users/${current.id}`, value);
    });
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setisAddVisible(true);
        }}
      >
        添加用户
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        rowKey={(item) => item.id}
      />
      <Modal
        open={isAddVisible}
        S
        title="添加用户"
        okText="确定"
        cancelText="取消"
        onCancel={() => {
          setisAddVisible(false);
        }}
        onOk={() => addFormOk()}
      >
        <UserForm
          regionList={regionList}
          roleList={roleList}
          ref={addForm}
        ></UserForm>
      </Modal>
      <Modal
        open={isUpdateVisible}
        title="更新用户"
        okText="更新"
        cancelText="取消"
        onCancel={() => {
          setisUpdateVisible(false);
          setisUpdateDisabled(!isUpdateDisabled);
        }}
        onOk={() => updateFormOk()}
      >
        <UserForm
          regionList={regionList}
          roleList={roleList}
          ref={updateForm}
          isUpdateDisabled={isUpdateDisabled}
          isUpdate={true}
        ></UserForm>
      </Modal>
    </div>
  );
}
