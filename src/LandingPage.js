import React, { Component } from 'react'

import { Segment, Container, Header, Grid } from 'semantic-ui-react'

import { people } from './assets/data'

function Person (props) {
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Column>
          {props.name}
        </Grid.Column>
        <Grid.Column>
          {props.description}
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default class LandingPage extends Component {
  render () {
    const headerMargin = Math.random() * 200
    const peopleDisplay = people.map((person, i) => (
      <Person key={i} name={person.name} description={person.description} />
    ))
    return (
      <div>
        <Segment
          inverted
          textAlign='center'
          style={
            {
              backgroundColor: '#ff00ff'
            }}
          vertical>
          <Container text>
            <Header
              as='h1'
              content='ITAbits'
              inverted
              style={{
                margin: headerMargin
              }}
            />
          </Container>
        </Segment>
        {peopleDisplay}
      </div>
    )
  }
}
