import {configureStore} from '@reduxjs/toolkit';
import reducer from '../reducers';
import { logaction } from '../middleware/logaction';

export const store = configureStore({reducer, middleware: [logaction]})