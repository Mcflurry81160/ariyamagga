import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app container-fluid">
      <header>
        <Header />
      </header>
      <body className="app-content">
        <Navbar items = {['About', 'Contact']} />
      </body>
    </div>
  );
}

export default App;
