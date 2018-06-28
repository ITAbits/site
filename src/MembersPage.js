import React from 'react'
import { Icon, Container, Header, Grid, Button, Modal, Image, Loader, Dimmer } from 'semantic-ui-react'
import peopleArray from './assets/data/people_data'
import MemberCard from './components/member_card.js'
import {browserHistory} from 'react-router';


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
     fetch('/getmembers')
       .then(res => res.json())
       .then(
         (result) => {
           result.members.sort(function(a, b){
              if(a.to != b.to)
                return a.to < b.to;
              if(a.sice != b.since)
                return a.since < b.since;
              return a.callby < b.callby;
            });
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

      if(this.state.isLoaded) {
        return (
            <div class="members" style={{color:'white'}}>
              <br></br>
                <h1 style={{color:'white'}}>Membros</h1>
                <Container card>
                    <Grid doubling centered columns={6}>
                        {members}
                    </Grid>
                </Container>
                <br></br>
                <br></br>
            </div>
        )
      } else {
        return (
          <div class="members" style={{color:'white', height: '100vh'}}>
            <br></br>
              <h1 style={{color:'white'}}>Membros</h1>
                <Dimmer active>
                  <Loader size='massive'></Loader>
                </Dimmer>
              <br></br>
              <br></br>
          </div>
        )
      }
    }
}

export default MembersPage;
