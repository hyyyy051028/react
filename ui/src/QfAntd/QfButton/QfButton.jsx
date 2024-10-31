
import './QfButton.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function QfButton({children, type, danger, size, icon}) {
  const sizeFormat = {
    'small': 'sm',
    'large': 'lg'
  }
  const btnClass = classNames({
    'qf-ant-btn': true,
    [`qf-ant-btn-${type}`]: true,
    'qf-ant-btn-dangerous': danger,
    [`qf-ant-btn-${sizeFormat[size]}`]: true 
  })
  return (
    <button className={btnClass}>{icon && <span className="qf-ant-btn-icon">{icon}</span>}<span>{children}</span></button>
  )
}
QfButton.defaultProps = {
  type: 'default',
  danger: false,
  size: 'middle',
  icon: null
}
QfButton.propTypes = {
  type: PropTypes.string,
  danger: PropTypes.bool,
  size: PropTypes.oneOf(['middle', 'small', 'large']),
  icon: PropTypes.element
}

export default QfButton