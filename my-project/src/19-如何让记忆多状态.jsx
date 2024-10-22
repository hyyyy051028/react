import{ useState}from'react'
function App(){
    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(0)
    const[count3,setCoun3]=useState(0)
    const handleClick=()=>{
        setCount(count+1)
        setCount2(2)
        setCoun3(3)
    }
    console.log(123)
    return (
        <div>
            hello app
            <button onClick={handleClick}> 点击</button>
            {count},{count2},{count3}
        </div>
    )
}
export default App