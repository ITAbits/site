import React, { Component } from 'react';
// import logo from './logo.svg'; TODO: ver isso aqui pra usar o logo maneiro que está na outra branch

import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import LandingPage from './LandingPage'

class Site extends Component {
  render() {
    return (
      <App>
        <Header>
          <Title>
            ITABITS
          </Title>
        </Header>
        <LandingPage></LandingPage>
      </App>
    )
  }
}

export default Site;
