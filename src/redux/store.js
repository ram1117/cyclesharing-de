import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import citiesReducer from './homepage/cititesSlice';
import detailSliceReducer from './detailspage/detailSlice';
import languageSliceReducer from './language/languageSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    detail: detailSliceReducer,
    language: languageSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
