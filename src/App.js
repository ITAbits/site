import React, { Component } from 'react'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
// import logo from './logo.svg'; TODO: pegar o logo da itabits

import './App.css';

import LandingPage from './LandingPage'
import Projects from './components/projects'
import Members from './components/members'

export default class App extends Component {
  render () {
    return (
      <div>
        <Projects/>
        <Members/>
      </div>
    )
  }
}
