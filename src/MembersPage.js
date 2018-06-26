import React from 'react'
import { Icon, Container, Header, Grid, Button, Modal, Image } from 'semantic-ui-react'
import peopleArray from './assets/data/people_data'
import MemberCard from './components/member_card.js'


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
        <div class="members" style={{color:'white'}}>
          <br></br><br></br><br></br>
            <h1 style={{color:'white'}}>Membros</h1>
            <Container card>
                <Grid doubling centered columns={6}>
                    {members}
                </Grid>
            </Container>
            <br></br>
            <p>Você já foi um membro da ITA Bits? Teremos orgulho de registrar você nessa página de membros!<br></br></p>

              <Modal trigger={<Button>Show Modal</Button>} closeIcon>
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                  <p>
                    Your inbox is getting full, would you like us to enable automatic archiving of old messages?
                  </p>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='red'>
                    <Icon name='remove' /> No
                  </Button>
                  <Button color='green'>
                    <Icon name='checkmark' /> Yes
                  </Button>
                </Modal.Actions>
              </Modal>


            <br></br>
            <br></br>
        </div>
    )
}
