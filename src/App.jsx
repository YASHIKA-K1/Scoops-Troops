import React from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;
