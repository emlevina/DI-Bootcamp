import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
import { logaction } from '../middleware/logaction';
import createSagaMiddleware from "redux-saga";
import { watchAgeDown, watchAgeUp } from "../sagas/saga";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware, logaction]
})


sagaMiddleware.run(watchAgeUp);
sagaMiddleware.run(watchAgeDown);