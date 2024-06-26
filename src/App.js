import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BettingComponent from './Components/BettingComponent';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<BettingComponent />} />
        </Routes>
      </Router>
  );
}
export default App;
