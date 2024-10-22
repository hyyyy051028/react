function App(){
    // let content;
    let count=2;
//     if( count >1){
// content = <div> hello react</div>
//     }
//     else{
//         content=<p>hi js</p>
//     }
        return (
    <div>
        {/* hello App */}
        <br />
        {count>3?<div> hello react</div>:<p>hi js</p>}
    </div>
)
}
export default App