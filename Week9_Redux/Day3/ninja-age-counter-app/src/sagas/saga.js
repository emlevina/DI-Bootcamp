import { delay, takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
    yield delay(4000);
    yield put({ type: "AGE_UP_ASYNC"});
}

export function* watchAgeUp() {
    yield takeLatest("AGE_UP", ageUpAsync);
}
function* ageDownAsync() {
    yield delay(4000);
    yield put({ type: "AGE_DOWN_ASYNC"});
}

export function* watchAgeDown() {
    yield takeLatest("AGE_DOWN", ageDownAsync);
}