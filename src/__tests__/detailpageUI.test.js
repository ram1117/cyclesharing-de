import { screen, waitFor } from '@testing-library/react';
import { server2 } from '../test-utils/mockServers';
import { renderWithRouter } from '../test-utils/test-uitl';
import DetailPage from '../components/detailpage/DetailPage';

beforeAll(() => server2.listen());
afterEach(() => server2.resetHandlers());
afterAll(() => server2.close());
describe('testing detail page component', () => {
  it('testing no of stations in the store', async () => {
    const { store } = renderWithRouter(<DetailPage />);
    await waitFor(() => {
      const detail = store.getState().detail.detail.stations;
      expect(detail.length).toBe(2);
    });
  });
  it('testing for company name', async () => {
    renderWithRouter(<DetailPage />);
    await waitFor(() => {
      expect(screen.getByText(`Transparenzportal Hamburg`).toBeInTheDocument);
    });
  });
  it('testing for no of stations displayed', async () => {
    renderWithRouter(<DetailPage />);
    await waitFor(() => {
      const stations = screen.getAllByTestId('stations');
      expect(stations.length).toBe(2);
    });
  });
});
