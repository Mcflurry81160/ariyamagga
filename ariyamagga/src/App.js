import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body className="App-content">
        <Navbar />
      </body>
    </div>
  );
}

export default App;
