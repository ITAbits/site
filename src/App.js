import React, { Component } from 'react'
// import logo from './logo.svg'; TODO: pegar o logo da itabits

import LandingPage from './LandingPage'

export default class App extends Component {
  render () {
    // TODO: REMOVER (T)
    const Page = Math.random() < 0.9
      ? <LandingPage />
      : <div> Voce deu azar! </div>

    return (
      <div>
        {Page}
      </div>
    )
  }
}
