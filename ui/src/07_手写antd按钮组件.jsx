
import { Button, Space } from "antd"
import { PlusCircleFilled } from "@ant-design/icons"
import { QfButton } from "./QfAntd"

function App() {
  return (
    <div>
      hello App
      <br />
      <Space>
        <Button>按钮1</Button>
        <Button type="primary">按钮2</Button>
        <Button danger>按钮3</Button>
        <Button type="primary" danger>按钮4</Button>
        <Button type="primary" danger size="small">按钮5</Button>
        <Button type="primary" danger size="large">按钮6</Button>
        <Button type="primary" danger size="large" icon={<PlusCircleFilled />}>按钮7</Button>
      </Space>
      <br />
      <br />
      <Space>
        <QfButton>按钮1</QfButton>
        <QfButton type="primary">按钮2</QfButton>
        <QfButton danger>按钮3</QfButton>
        <QfButton type="primary" danger>按钮4</QfButton>
        <QfButton type="primary" danger size="small">按钮5</QfButton>
        <QfButton type="primary" danger size="large">按钮6</QfButton>
        <QfButton type="primary" danger size="large" icon={<PlusCircleFilled />}>按钮7</QfButton>
      </Space>
    </div>
  )
}
export default App