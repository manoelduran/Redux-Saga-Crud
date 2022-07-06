import React from 'react';
import Router from './routes';
import { BrowserRouter as Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Router />
      </Routes>
    </div>
  );
}

export default App;
