import ReactDOMServer from 'react-dom/server'
import App from './07_服务端渲染SSR.jsx'

export function render(url, context) {
  return ReactDOMServer.renderToString(<App />)
}