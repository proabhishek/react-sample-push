import React, {useEffect, useState} from "react";

function UseEffectExplanation() {
    
    const [gold, setGold] = useState(0)
    const [silver, setSilver] = useState(0)


    useEffect(() => {
        document.title = `Gold and Silver Update`
        console.log("Use Effect ran")
    },[gold]
    )
        function increaseGold(){
           setGold(previousGold => previousGold + 1)
        }
        function increaseSilver(){
            setSilver(previousSilver => previousSilver + 1)
        }

    return (
        <div>
              <h1> Gold: {gold}, Silver:{silver}</h1>
              <button onClick={increaseGold}>Increase Gold</button>
              <button onClick={increaseSilver}>Increase Silver</button>
 
        </div>
    )


}
export default UseEffectExplanation