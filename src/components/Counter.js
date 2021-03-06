import React from 'react';
import { useSelector } from "react-redux";

const Counter = ({ increase, decrease }) => {
    const { number } = useSelector(state => state.counter);

    return (
        <div>
            {number} <br />

            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
};

export default Counter;
