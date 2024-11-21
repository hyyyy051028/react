
// function Welcome(portot){
//     return (
//         <div>
//             hello welcome,{portot.count},{portot.msg}
//         </div>
//     )
// }
// function App(){
//     return (
//         <div>
//             hello app
//             <Welcome count='123' msg='hi react'/>
//         </div>
//     )
// }

// export default  App
import PropTypes from 'prop-types';
// function Welcome({count,msg}){
//     return (
//         <div>
//             hello welcome,{ count },{msg}
//         </div>
//     )
// }
function Welcome({onClick}){
    return (
        <div onClick={onClick}>
            hello welcome
        </div>
    )
}
Welcome.propTypes = {
    count: PropTypes.number.isRequired,
    msg: PropTypes.string.isRequired,
    onClick: PropTypes.func, 
};
function App(){
    // const count=123
    const handleClick=()=>{
        console.log(1234)
    }
    return (
        <div>
         
            <Welcome onClick={handleClick} />
        </div>
    )
}

export default  App