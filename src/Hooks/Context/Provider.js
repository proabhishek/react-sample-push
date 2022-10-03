import React, {useState} from "react";
import PackageContext from "./Context";


const Provider =(props)=>{
     
  

      const [cricketer, setCrickter] = useState(
           {
                name: "Sachin Tendulkar",
                age: 45,
                country: "India",
                heighestScore: 200
           })
       return(
          <PackageContext.Provider
          value = { 
            {
                data: cricketer,
                updateCrickterAge: ()=>{setCrickter({...cricketer, age: cricketer.age+1})}

            }
          }
          >
            {props.children}
          </PackageContext.Provider>
       )
}


export default Provider



// let username = "sachin"
