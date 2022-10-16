import {configureStore} from '@reduxjs/toolkit';
import globalContainerReducer from './src/features/globalContainer';

export const store = configureStore({
  reducer: {
    globalContainer:globalContainerReducer
  },
});
