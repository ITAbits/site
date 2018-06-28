import React from 'react'
import { Popup, Grid, Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default props => {
  return (
      <Grid.Column>
        <div style={{color:'black'}}>
          <Card >
            <Image src={props.imagelink}/>
            <Card.Content>
              <Card.Header>
                {props.callby}
              </Card.Header>
              <Card.Meta>
                20{props.since} - 20{props.to}
              </Card.Meta>
              <a href="https://github.com/ITAbits"><Icon name='github square'/></a>
              <a href="https://www.linkedin.com/company/itabits/"><Icon name='linkedin square'/></a>
            </Card.Content>
          </Card>
        </div>
      </Grid.Column>
  )
}
