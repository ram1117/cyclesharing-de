import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import citiesReducer from './homepage/cititesSlice';
import detailSliceReducer from './detailspage/detailSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    detail: detailSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
