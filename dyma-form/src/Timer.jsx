import React, { useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    setInterval(() => {
        setCount(new Date().getSeconds())
    }, 1000);

    return(
        <div>{count}</div>
    )
}

export default Timer;