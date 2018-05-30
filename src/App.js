import React, { Component } from 'react'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg'; TODO: pegar o logo da itabits

import './App.css';

import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';
import MembersPage from './MembersPage';


export default class App extends Component {
  render () {
    return (
    <Router>
      <div>
        <Route exact={true} path="/" component={LandingPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/members" component={MembersPage}/>
      </div>
    </Router>
    );
  };
}
