import React, { useState } from 'react'; //
import './CounterHook.css';

const CounterHook = () => {
    const [counter, setCounter] = useState(0); //aseta aina ylös, heti funktiomäärittelyn jälkeen

    const addHandler = () => {
        setCounter(counter + 1);
    };
    const removeHandler = () => {
        counter <= 0 ?setCounter(0) : setCounter(counter -1);
    };
    
    const resetHandler = () => {
        setCounter(  0);
    }

    return (
        <div>
            <p>
            You clicked {counter} times
            </p>
            <button onClick={addHandler}>Add one!</button>
            <button onClick={removeHandler}>Remove one!</button>
            <button onClick={resetHandler}>Reset!</button>

        </div>
    )
}
export default CounterHook;