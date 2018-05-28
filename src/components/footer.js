import React from 'react'
import { Icon, Grid, Header, Container, List } from 'semantic-ui-react'


export default props => {
  return (
    <div>
      <Container textAlign='center'>
          <Grid centered columns={2} verticalAlign='middle'>
            <Grid.Row centered columns={2}>
            <Grid.Column>
              Contato:<br/>
              itabits@gmail.com
            </Grid.Column>
            <Grid.Column>
              Institucional:<br/>
              <a href={props.github}><Icon name='github square'/></a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
