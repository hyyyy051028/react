import { Row, Col, Layout } from 'antd';
import 'antd/dist/reset.css';
const { Header, Footer, Sider, Content } = Layout;

const colStyle = {
  background: 'red',
};
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

function App() {
  return (
    <div>
      hello App
      {/* <Row gutter={10}>
        <Col span={8}><div style={colStyle}>aaaaaa</div></Col>
        <Col span={8}><div style={colStyle}>bbbbbb</div></Col>
        <Col span={8}><div style={colStyle}>cccccc</div></Col>
      </Row> */}
      <Row gutter={[10, 10]}>
        <Col
          xs={12}
          md={8}
        >
          <div style={colStyle}>aaaaaa</div>
        </Col>
        <Col
          xs={12}
          md={8}
        >
          <div style={colStyle}>bbbbbb</div>
        </Col>
        <Col
          xs={12}
          md={8}
        >
          <div style={colStyle}>cccccc</div>
        </Col>
      </Row>
      <Layout>
        <Sider style={siderStyle}>Sider</Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
export default App;
