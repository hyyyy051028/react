
import './QfRate.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'

function QfRate({count, value, onChange}) {
  const [mouseVal, setMouseVal] = useState(value)
  const [clickVal, setClickVal] = useState(value)
  const handleMouseEnter = (index) => {
    setMouseVal(index + 1)
  }
  const handleMouseLeave = () => {
    setMouseVal(clickVal)
  }
  const handleClick = (index) => {
    setClickVal(index + 1)
    onChange(index + 1)
  }
  const stars = []
  for(let i=0; i<count; i++) {
    const rateClass = classNames({
      'qf-ant-rate-star': true, 
      'qf-ant-rate-star-active': mouseVal > i ? true : false
    })
    stars.push(<li key={i} className={rateClass} onMouseEnter={() => handleMouseEnter(i)} onClick={() => handleClick(i)}></li>)
  }

  return (
    <ul className="qf-ant-rate" onMouseLeave={handleMouseLeave}>
      {stars}
    </ul>
  )
}
QfRate.defaultProps = {
  count: 5,
  value: 0,
  onChange: () => {}
}
QfRate.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
}

export default QfRate