import React,{useState} from "react"

const App=()=>{
       const [gold, setGold]   = useState(0)
       
    return (
        <div>
           <h1>{gold}</h1>
           <button onClick={()=>{setGold(gold+1)}}>Increase Gold</button>
           <button onClick={()=>{setGold(gold-1)}}>Decrease Gold</button>
           <button onClick={()=>{setGold(0)}}>Reset Gold</button>
        </div>
    )
}

export default App










