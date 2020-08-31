import React from 'react';
import { useSelector } from "react-redux";

const CounterSagaVer = ({ increase, decrease }) => {
    const { number } = useSelector(state => state.counter);

    return (
        <div>
            <strong>Saga Ver</strong>
            {number} <br />

            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
};

export default CounterSagaVer;
