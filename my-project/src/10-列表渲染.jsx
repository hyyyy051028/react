// function App(){
//     const list =['aaaaa','bbbbb','cccccc']
//     for(let i=0;i<list.length;i++){
//         list[i]=<li>{list[i]}</li>
//     }
//     return (
//         <div>
//             hello App
//             <br />
//             <ul>
//                 {list}
//             </ul>
            
//         </div>
//     )
// }
// export default App
function App(){
    const list =[{id:0,text:'aaaaa'},
        {id:1,text:'bbbbb'},
        {id:2,text:'cccccc'}]

    return (
        <div>
            hello App
            <br />
            <ul>
                {list.map((item)=> <li key={item.id}>{item.text}</li>)}
            </ul>
            
        </div>
    )
}
export default App