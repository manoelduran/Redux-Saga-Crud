import React from 'react';
import Router from './routes';
import { BrowserRouter as Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header />
      <Routes>
        <Router />
      </Routes>
    </div>
  );
}

export default App;
