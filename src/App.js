import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { fetchData } from './redux/cititesSlice/cititesSlice';
import HomePage from './components/homepage/HomePage';
import DetailPage from './components/detailpage/DetailPage';
import './App.css';

const App = () => {
  store.dispatch(fetchData());
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
