import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import SupportUsPage from './components/SupportUsPage';
import ContactPage from './components/ContactPage';

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
            <Route path="/supportus"><SupportUsPage /></Route>
            <Route path="/contactus"><ContactPage /></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

function GetNavBarItems() {
  var navbarOptions = ['About', 'Gallery', 'Support Us', 'Contact Us'];

  var retNavbarOptions = [];
  for (let i = 0; i < navbarOptions.length; i++) {
    var navbarItem = {
      itemName: navbarOptions[i],
      itemIndex: i,
      navbarLinkPath: navbarOptions[i].toLowerCase().replace(" ","")
    }
    
    retNavbarOptions.push(navbarItem);
  }

  return retNavbarOptions;
}

export default App;
