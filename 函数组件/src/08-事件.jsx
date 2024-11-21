function App(){
    const headleClick=()=>{
        console.log(123)
    }
    const headleClick2=(num)=>{
        return ()=>{
            console.log(num)
        }
    }
    const headleClick3=(num,e)=>{
        console.log(num,e)
    }
    return (
        <div>
            hello app
            <button onClick={headleClick}>点击</button>
            <button onClick={headleClick2(123)}>点击2-传参</button>
            <button onClick={(e)=>headleClick3(123,e)}>点击3-传参</button>
            <button onClick={headleClick3}>点击4-传参</button>
        </div>
    )
}
export default App 