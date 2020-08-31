import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import App from './App';
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어 만들기

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, devTools); // 익스텐션 사용 x

// 리덕스 데브툴즈 익스텐션 사용
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,  // 사가 미들웨어 적용
            logger
        )
    )
);

sagaMiddleware.run(rootSaga); // 사가 미들웨어 실행 - 스토어 만든 후에 실행해야 됨.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);





