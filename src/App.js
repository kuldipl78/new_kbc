import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import PlayerScreen from './components/PlayerScreen';
import './App.css'

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/player" element={<PlayerScreen />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
