/*eslint-disable*/
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { citiesData, detailsData } from './mockData';

const handlers1 = [
  rest.get('http://api.citybik.es/v2/networks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(citiesData), ctx.delay(10));
  }),
];

export const server1 = setupServer(...handlers1);

const handlers2 = [
  rest.get(
    'http://api.citybik.es/v2/networks/stadtrad-hamburg',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(50), ctx.json(detailsData));
    }
  ),
];

export const server2 = setupServer(...handlers2);
