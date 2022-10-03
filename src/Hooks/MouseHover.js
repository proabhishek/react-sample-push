import React, {useState, useEffect} from "react";


  function MouseHover() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}
  