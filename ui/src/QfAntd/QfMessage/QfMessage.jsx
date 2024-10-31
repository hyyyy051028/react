
import ReactDOM from 'react-dom/client'
import './QfMessage.css'
import { InfoCircleFilled, CheckCircleFilled } from '@ant-design/icons'
import PropTypes from 'prop-types'

function QfMessage({content, icon}) {
  return (
    <div className="qf-ant-message-notice">
      <div className="qf-ant-message-notice-content">{icon} {content}</div>
    </div>
  )
}
QfMessage.defaultProps = {
  content: '',
  icon: null
}
QfMessage.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.element
}

const qfMessage = {
  wrapper: null,
  root: null,
  list: [],
  delay: 2000,
  showAndHide(content, icon) {
    if(this.root) {
      this.root.unmount()
      this.root = null
    }
    if(!this.wrapper) {
      this.wrapper = document.createElement('div')
      this.wrapper.className = 'qf-ant-message'
      document.body.appendChild(this.wrapper)
    }
    if(!this.root) {
      this.root = ReactDOM.createRoot(this.wrapper)
      this.list.push(<QfMessage key={this.list.length} content={content} icon={icon} />)
      this.root.render(this.list)
    }
    setTimeout(() => {
      this.list.shift()
      this.wrapper.children[0].remove()
      this.root = null
      if(this.list.length === 0) {
        this.wrapper.remove()
        this.wrapper = null
      } 
    }, this.delay)
  },
  info(content) {
    this.showAndHide(content, <InfoCircleFilled style={{color: 'blue'}} />)
  },
  success(content) {
    this.showAndHide(content, <CheckCircleFilled style={{color: 'green'}} />)
  }
}

export default qfMessage