import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
// import Gallery from './Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app container-fluid">
        <Header />
      <div className="app-content">
        <Router>
          <Navbar items={['About', 'Gallery', 'Contact']} />
          <Switch>
            <Route exactly compontent={About} pattern="/"></Route>
            <Route exactly compontent={Contact} pattern="/contact"></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
