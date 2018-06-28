import React, { Component } from 'react'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
// import logo from './logo.svg'; TODO: pegar o logo da itabits
import Navbar from './components/Navbar'

import './App.css'

import LandingPage from './LandingPage'
import ProjectsPage from './ProjectsPage'
import MembersPage from './MembersPage'
import TutorialsPage from './TutorialsPage'

export default class App extends Component {
  render () {
    return (
    <Router>
      <div id="router-wrapper">
        <Navbar/>
        <Switch>
          <Route exact path="%PUBLIC_URL%/" component={LandingPage} />
          <Route path="%PUBLIC_URL%/projects" component={ProjectsPage} />
          <Route path="%PUBLIC_URL%/members" component={MembersPage}/>
          <Route path="%PUBLIC_URL%/tutorials" component={TutorialsPage} />
        </Switch>
      </div>
    </Router>
    );
  };
}
