import React, {Component} from 'react';
import { connect } from 'react-redux';
import CounterClassVer from '../components/CounterClassVer';

import { ClassDecrement, ClassIncrement } from "../reducers/counter";

const mapStateToProps = (state) => ({
    number: state.counter.number
});

const mapDispatchToProps= (dispatch) => ({
    increment: () => dispatch(ClassIncrement()),
    decrement: () => dispatch(ClassDecrement())
})
// ---------------------------------------------------------------------------

// class CounterContainerClassVer extends Component {
//     render() {
//
//         const { number, increment, decrement } = this.props;
//
//         return (
//             <CounterClassVer number={number} increment={increment} decrement={decrement} />
//         );
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CounterContainerClassVer);

// 또는 --------------------------------------------------------------------

const CounterContainerClassVer = connect(mapStateToProps, mapDispatchToProps)(CounterClassVer);

export default CounterContainerClassVer;