import { screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import renderWithProviders from '../__mocks__/test-uitl';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const data = {
  networks: [
    {
      company: 'JCDecaux',
      href: '/v2/networks/stadtrad-hamburg',
      location: {
        latitude: 53.57532,
        city: 'Hamburg',
        longitude: 10.01534,
        country: 'DE',
      },
      name: 'Transparenzportal Hamburg',
      id: 'stadtrad-hamburg',
    },
  ],
};

const handlers = [
  rest.get('http://api.citybik.es/v2/networks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data), ctx.delay(10));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('testing Homepage component', async () => {
  const { store } = renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // const cityList = store.getState().cities.cities;
  // console.log(cityList.length);
  await waitFor(() => expect(screen.getByText('Hamburg').toBeInTheDocument));
});
