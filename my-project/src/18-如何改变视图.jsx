// function App(){
//     let count=0
//     const handleClick=()=>{
// count++
// console.log(count)
//     }
//     console.log(123)
//     return (
//         <div>
//             hello app
//             <button onClick={handleClick}> 点击</button>
//             {count}
//         </div>
//     )
// }
// export default App
import{ useState}from'react'
function App(){
    const[count,setCount]=useState(0)
    const handleClick=()=>{
setCount(count+1)

    }
    console.log(123)
    return (
        <div>
            hello app
            <button onClick={handleClick}> 点击</button>
            {count}
        </div>
    )
}
export default App