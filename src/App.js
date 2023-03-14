import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import DetailPage from './components/detailpage/DetailPage';
import './App.css';

const App = () => (
  <div className="App biege">
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/details/:nwId" element={<DetailPage />} />
    </Routes>
  </div>
);

export default App;
