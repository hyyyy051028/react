import {Fragment}from'react'
function App(){
    //对象和函数是不能直接放到jsx{}中的
    const username="xiaoming"
    const head=<div>头部</div>
    return (
       <Fragment>
        <div className="box"> 
            hello app
            <label htmlFor="elem">用户名</label>
            <input id="elem" type="text" tabIndex={1} onClick={()=>{}}/>
            
            <div>
                {1+1},{'foo'.toUpperCase},{[1,2,3].reverse()}
                <br />
                {username}
                <br />
                {head}
            </div>
            </div>
            </Fragment>
    )
}
export default App