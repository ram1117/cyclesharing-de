/*eslint-disable*/
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import citysliceReducer from '../redux/homepage/cititesSlice';
import detailSliceReducer from '../redux/detailspage/detailSlice';
import languageSliceReducer from '../redux/language/languageSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        cities: citysliceReducer,
        detail: detailSliceReducer,
        language: languageSliceReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const renderWithRouter = (
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        cities: citysliceReducer,
        detail: detailSliceReducer,
        language: languageSliceReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return (
      <MemoryRouter initialEntries={['/details/stadtrad-hamburg']}>
        <Provider store={store}>
          <Routes>
            <Route path="/details/:nwId" element={children} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
