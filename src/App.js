import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { fetchData } from './redux/cititesSlice/cititesSlice';
import HomePage from './components/homepage/HomePage';
import './App.css';

const App = () => {
  store.dispatch(fetchData());
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
