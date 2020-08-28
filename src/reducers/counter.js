export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//only Class Ver
export const ClassIncrement = () => ({type: INCREMENT});
export const ClassDecrement = () => ({type: DECREMENT});

const initialState = {
    number : 0
}

export default function counter(state = initialState, action ){
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
};