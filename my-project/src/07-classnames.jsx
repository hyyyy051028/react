import classNames from "classnames"
import style from './05-局部样式.module.css'

function App(){
    const myclass=classNames({
        box1: true,
        box2: false,
        [style.headTi ]
    })
    return (
        <div className={myclass.join(' ')}>
            hello App
        </div>
    )
}
export default App