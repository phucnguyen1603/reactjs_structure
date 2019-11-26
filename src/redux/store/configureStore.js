import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const middlewares = [];
    const enhancers = [];
    // logger
    // const loggerMiddleware = createLogger({
    //     collapsed: (getState, action, logEntry) => !logEntry.error,
    // });
    // middlewares.push(loggerMiddleware);
    middlewares.push(sagaMiddleware);
    enhancers.push(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, compose(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
}
