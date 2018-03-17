import React, { Component } from 'react';

import Article from 'grommet/components/Article'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Title from 'grommet/components/Title'
import WorldMap from 'grommet/components/WorldMap'

class LandingPage extends Component {
  render() {
    return (
      <Article>
        <Section>
          <Title>
            Hello world
          </Title>
        </Section>
        <Section>
          <WorldMap
            series={[{
              "place": [-23.2237, -48.9009],
              "label": "Atlanta",
              "colorIndex": "accent-2",
              "id": "atlanta",
            }]}
            zoom={false} />
        </Section >
      </Article >
    )
  }
}

export default LandingPage;