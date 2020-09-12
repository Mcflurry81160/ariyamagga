import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
// import DonatePage from './components/DonatePage';

function App() {
  return (
    <div className="app container-fluid">
      <Header />
      <div className="app-content">
        <Router>
          <Navbar items={GetNavBarItems()} />
          <Switch>
            <Route exact path="/"><AboutPage /></Route>
            <Route path="/about"><AboutPage /></Route>
            <Route path="/gallery"><GalleryPage /></Route>
            {/* <Route path="/donate"><DonatePage /></Route> */}
            <Route path="/contact"><ContactPage /></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

function GetNavBarItems() {

  // var navbarOptions = ['About', 'Gallery', 'Donate', 'Contact'];
  var navbarOptions = ['About', 'Gallery', 'Contact'];

  var retNavbarOptions = [];
  for (let i = 0; i < navbarOptions.length; i++) {
    var navbarItem = {
      itemName: navbarOptions[i],
      itemIndex: i,
      navbarLinkPath: navbarOptions[i].toLowerCase()
    }
    
    retNavbarOptions.push(navbarItem);
  }

  return retNavbarOptions;
}

export default App;
