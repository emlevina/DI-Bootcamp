import { configureStore } from '@reduxjs/toolkit';
import { my_logger } from '../middleware/logger';

import rootReducer from '../reducers'

export const store = configureStore({ reducer: rootReducer, middleware: [my_logger] })