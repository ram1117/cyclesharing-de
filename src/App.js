import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import './App.css';

const App = () => (
  <div className="App">
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
