import { Routes, Route } from 'react-router-dom';

import Home from './home_page/Home';
import { Quarto } from './game_page/index';

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="quarto" element={<Quarto />} />
        </Routes>
      </div>
  );
};