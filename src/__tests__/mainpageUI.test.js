import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../test-utils/test-uitl';
import HomePage from '../components/homepage/HomePage';
import { server1 } from '../test-utils/mockServers';

beforeAll(() => server1.listen());
afterEach(() => server1.resetHandlers());
afterAll(() => server1.close());

describe('testing Homepage component', () => {
  it('testing no of cities in the store', async () => {
    const { store } = renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const cityList = store.getState().cities.cities;
      expect(cityList.length).toBe(3);
    });
  });
  it('testing if a city is in homepage', async () => {
    renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Hamburg').toBeInTheDocument);
    });
  });

  it('testing if 3 citites are rendered homepage', async () => {
    renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const cities = screen.getAllByTestId('cities');
      expect(cities.length).toBe(3);
    });
  });
  it('testing if 3 citites are rendered homepage', async () => {
    renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const alphabets = screen.getAllByTestId('alphabets');
      expect(alphabets.length).toBe(2);
    });
  });
  it('testing no of cities displayed in header', async () => {
    renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('total').textContent).toBe('Cities: 3');
    });
  });
});
