
import './Counter.css';
import React from "react";

function Counter() {

const [count, setCount] = React.useState(0);

    return(
        <div>
            <p className="counter">
                tâches en cours
            </p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>

        </div>
    );


}

export default Counter;
