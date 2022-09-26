const App=()=>{
    let a = 1 
    console.log("component is running")
     function add(){
        a = a+1
        console.log(a)
        return a
    }
    return (
        <div>
           <h1>{a}</h1>
           <button onClick={add}>Increase A</button>
        </div>
    )
}