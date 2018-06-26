import React from 'react'
import { Popup, Grid, Card, Icon, Image } from 'semantic-ui-react'


export default props => {
  return (
      <Grid.Column>
        <div style={{color:'black'}}>
          <Card >
            <Image src={props.img}/>
            <Card.Content>
              <Card.Header>
                {props.name}
              </Card.Header>
              <Card.Meta>
                {props.joined} - {props.left}
              </Card.Meta>
                <Popup
                  trigger={<Icon circular name='mail' />}
                  content={props.mail}
                  inverted
                  position='left center'
                />
                <a href={props.github}><Icon name='github square'/></a>
                <a href={props.linkedin}><Icon name='linkedin square'/></a>
            </Card.Content>
          </Card>
        </div>
      </Grid.Column>
  )
}
