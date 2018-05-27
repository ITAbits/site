import React from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

export default props => {
  return (
    <Grid.Column>
      <Card>
        <Image src={props.img}/>
        <Card.Content>
          <Card.Header>
            {props.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {props.joined} - {props.left}
            </span>
          </Card.Meta>
          <Card.Description>
            {props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='mail'/>
            <Icon name='facebook square'/>
            <Icon name='github square'/>
            <Icon name='linkedin square'/>
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}
