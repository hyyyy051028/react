
// function Welcome(){
//     return (
//         <div>
//             welcome
//         </div>
//     )
// }

// function App(){
//     return(
//         <div>
//             hello app
//             <br />
//             <Welcome />
//         </div>
//     )
// }
// export default App
const Qf =()=>{
    
        return(
         <div>
            hello qf
        </div>
        )
    }
Qf.Welcome = ()=>{
    return(
        <div>
            hello welcome
        </div>
    )
}
const {Welcome}=Qf
function App(){
    return(
        <div>
            hello app
            <br />
            <Qf /> 
            <Qf.Welcome />
        </div>
    )
}
export default App