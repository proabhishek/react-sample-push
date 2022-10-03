import React from "react"
import PackageContext from "./Hooks/Context/Context"
import Provider from "./Hooks/Context/Provider"



const Smiley = () => {
    return (
        <div>
            <PackageContext.Consumer> 
               { (value) => (
                    <div>
                        <h4>Name of Cricketer is : {value.data.name}</h4>
                        <p>Age of Cricketer is : {value.data.age}</p>
                        <button onClick={value.updateCrickterAge}>Update Age</button>
                        <p>Country of Cricketer is : {value.data.country}</p>
                        <pre>Heighest Score of Cricketer is : {value.data.heighestScore}</pre>
                    </div>
                )
               }    
            </PackageContext.Consumer> 
        </div>
    )
}

const App=()=>{
      
    return (
        <div>
            <h1> Hello World</h1>
            <Provider>
                <Smiley />
            </Provider>
        </div>
    )
}

export default App










