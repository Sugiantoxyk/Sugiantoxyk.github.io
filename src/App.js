import { Routes, Route } from 'react-router-dom';

import Home from './home_page/Home';
import Game from './game_page/Game';

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </div>
  );
};