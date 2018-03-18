import React, { Component } from 'react'

import { Segment, Container, Header } from 'semantic-ui-react'

export default class LandingPage extends Component {
  render () {
    return (
      <Segment inverted textAlign='center' style={{minHeight: 700}} vertical>
        <Container text>
          <Header
            as='h1'
            content='ITAbits'
            inverted
          />
        </Container>
      </Segment>
    )
  }
}
