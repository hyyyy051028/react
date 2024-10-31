
import { Rate } from "antd"
import { QfRate } from "./QfAntd"
import { useState } from "react"

function App() {
  const [value1, setValue1] = useState(3)
  const [value2, setValue2] = useState(3)
  const [value3, setValue3] = useState(3)
  const [value4, setValue4] = useState(3)
  return (
    <div>
      hello App
      <br />
      <Rate />
      <br />
      <Rate value={value1} onChange={setValue1} /> { value1 }
      <br />
      <Rate count={6} value={value2} onChange={setValue2} /> { value2 }
      <hr />
      <QfRate />
      <br />
      <QfRate value={value3} onChange={setValue3} /> { value3 }
      <br />
      <QfRate count={6} value={value4} onChange={setValue4} /> { value4 }
    </div>
  )
}
export default App