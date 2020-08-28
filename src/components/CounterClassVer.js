import React from 'react';


//----------------------------------------------------------------------

// const CounterClassVer = ({ number, increment, decrement }) => {
//     return (
//         <div>
//             <strong>Class Ver</strong>
//             {number} <br />
//
//             <button onClick={increment}>+</button>
//             <button onClick={decrement}>-</button>
//         </div>
//     );
// };

//또는 -----------------------------------------------------------------

const CounterClassVer = (props) => {
    const { number, increment, decrement } = props;

    return (
        <div>
            <strong>Class Ver</strong>
            {number} <br />

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};



export default CounterClassVer;
