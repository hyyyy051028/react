// function sayHi(){
//     console.log("hi");
    
// }
// var sayBay=function(){
//     console.log("bye")

// }
// sayBay()
// sayHi()
function callFunction(callback,name){
    callback(name)
}
callFunction(function(name){
    console.log(name+":bye");
    
},"frank")