import { takeLatest, put, call } from 'redux-saga/effects';
import { COUNTER, setCounterAction } from '../actions/counterAction';

export default function* () {
    yield takeLatest(COUNTER.GET, counterSaga);
}

function* counterSaga(data) {
    yield put(setCounterAction(data));
}
