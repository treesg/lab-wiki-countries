import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import countries from './countries.json';
import Navbar from './components/Navbar.js';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container" style={{display: 'flex'}}>
        <div className="row">
          
            <CountriesList countries={countries}/>
          

          <div className="col-7">
            <Switch>
              <Route path="/:id" render={
                (props) => <CountryDetails {...props} />
              } />
              <Route path="/" render={() => <Home />}/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
