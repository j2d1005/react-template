import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { INCREASE_ASYNC, DECREASE_ASYNC } from "../sagas/counter";

import CounterSagaVer from '../components/CounterSagaVer';

const CounterContainerSagaVer = () => {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increase = () => {
        console.log('1초 후 증가');
        dispatch({ type: INCREASE_ASYNC });
    }
    const decrease = () => {
        console.log('1초 후 감소');
        dispatch({ type: DECREASE_ASYNC });
    }

    return (
        <div>
            <CounterSagaVer number={number} increase={increase} decrease={decrease} />
        </div>
    );
};

export default CounterContainerSagaVer;