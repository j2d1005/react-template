import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT } from "../reducers/counter";

import Counter from '../components/Counter';

// class CounterContainer extends Component {
//     render() {
//         const number = useSelector(state => state.counter);
//         const dispatch = useDispatch();
//
//         const increase = () => {
//             console.log('증가');
//             dispatch({ type:INCREMENT });
//         }
//         const decrease = () => {
//             console.log('감소');
//             dispatch({ type:DECREMENT });
//         }
//
//         return (
//             <div>
//                 <Counter number={number} increase={increase} decrease={decrease} />
//             </div>
//         );
//     }
// }

const CounterContainer = () => {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increase = () => {
        console.log('증가');
        dispatch({ type: INCREMENT });
    }
    const decrease = () => {
        console.log('감소');
        dispatch({ type: DECREMENT });
    }

    return (
        <div>
            <Counter number={number} increase={increase} decrease={decrease} />
        </div>
    );
};

export default CounterContainer;