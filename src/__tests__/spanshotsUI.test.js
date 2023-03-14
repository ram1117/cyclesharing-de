import renderer from 'react-test-renderer';
import HomePage from '../components/homepage/HomePage';
import DetailPage from '../components/detailpage/DetailPage';
import HeaderPanel from '../components/homepage/HeaderPanel';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('snapshot testing components', () => {
  it('testing homepage snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HomePage />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing detailpage snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DetailPage />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing headerpanel snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HeaderPanel />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
