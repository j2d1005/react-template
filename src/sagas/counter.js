import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {INCREMENT, DECREMENT} from '../reducers/counter';

export const INCREASE_ASYNC = 'INCREASE_ASYNC';
export const DECREASE_ASYNC = 'DECREASE_ASYNC';

function* increaseSaga() {
    yield delay(1000);
    yield put({type:INCREMENT});
}

function* decreaseSaga() {
    yield delay(1000);
    yield put({type:DECREMENT});
}

export default function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}
