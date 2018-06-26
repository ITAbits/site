import React from 'react'
import { Icon, Container, Header, Grid, Button, Modal, Image } from 'semantic-ui-react'
import peopleArray from './assets/data/people_data'
import MemberCard from './components/member_card.js'


class MembersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
     fetch("https://itabits.herokuapp.com/getmembers")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             items: result.members
           });
         },
         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )
   }

  render(){
    const members = this.state.items.map((item, index) => {
          return (
              <MemberCard
                  firstname={item.firstname}
                  secondname={item.secondname}
                  callby={item.callby}
                  imagelink={item.imagelink}
                  to={item.to}
                  since={item.since}
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
              <p>Você já foi um membro da ITA Bits? Teremos orgulho de registrá-lo você nessa página de membros!<br></br></p>

                <Modal trigger={<Button>Clique aqui</Button>} closeIcon>
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
}

export default MembersPage;
