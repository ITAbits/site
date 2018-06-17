import React from 'react'
import { Icon, Container, Header, Grid } from 'semantic-ui-react'
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
        mail={item.mail}
        github={item.github}
        facebook={item.facebook}
        linkedin={item.linkedin}
      />
    );
  });

  return (
    <div id='members-container'>
      <Container card>
        <h1>Our Team</h1>
        <Grid doubling columns={6}>
          {members}
        </Grid>
      </Container>
    </div>
  )
}
