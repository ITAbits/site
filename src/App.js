import React, { Component } from 'react'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import logo from './logo.svg'; TODO: pegar o logo da itabits
import Navbar from './components/Navbar'

import './App.css'

import LandingPage from './LandingPage'
import ProjectsPage from './ProjectsPage'
import MembersPage from './MembersPage'
import TutorialsPage from './TutorialsPage'

export default class App extends Component {
  render () {
    let root = process.env.PUBLIC_URL;
    let home = root + "/",
        projects = root + "/projects",
        members = root + "/members",
        tutorials = root + "/tutorials";

    return (
    <Router>
      <div id="router-wrapper">
        <Navbar/>
        <Switch>
          <Route exact path={home} component={LandingPage} />
          <Route path={projects} component={ProjectsPage} />
          // <Route path={members} component={MembersPage}/>
          // <Route path={tutorials} component={TutorialsPage} />
        </Switch>
      </div>
    </Router>
    );
  };
}
