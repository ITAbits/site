import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'
import peopleArray from '../assets/data/people_data'
import MemberCard from './member_card.js'


export default props => {
  const members = peopleArray.map((item, index) => {
    return (
      <MemberCard
        name={item.name}
        img={item.img}
        description={item.description}
        joined={item.joined}
        left={item.left}
      />
    );
  });

  return (
    <div>
      <Container card>
        <Header as='h2' style={{color: 'white'}}>Members</Header>
          <Grid>
            <Grid.Row columns={5}>
              {members}
            </Grid.Row>
          </Grid>
      </Container>
    </div>
  )
}
