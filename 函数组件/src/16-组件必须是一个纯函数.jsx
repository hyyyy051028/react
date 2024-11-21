let count=1
function App(){
    count++
    console.log(count)
    return (
        <div>
            hello app,{ count }
        </div>
    )
}
export default App