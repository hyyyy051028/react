
import { message } from 'antd'
import { qfMessage } from './QfAntd'

function App() {
  const handleClick1 = () => {
    message.info('hello')
  }
  const handleClick2 = () => {
    message.success('hello')
  }
  const handleClick3 = () => {
    qfMessage.info('hello')
  }
  const handleClick4 = () => {
    qfMessage.success('hello')
  }
  return (
    <div>
      hello App
      <br />
      <button onClick={handleClick1}>点击1</button>
      <button onClick={handleClick2}>点击2</button>
      <br />
      <button onClick={handleClick3}>点击3</button>
      <button onClick={handleClick4}>点击4</button>
    </div>
  )
}
export default App