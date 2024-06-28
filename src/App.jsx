import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Principal } from './pages/Principal';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
