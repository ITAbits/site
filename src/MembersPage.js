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
    let proxyUrl = "https://cors-anywhere.herokuapp.com/",
        targetUrl = "https://itabits.herokuapp.com/getmembers"
     fetch(proxyUrl+targetUrl)
       .then(res => res.json())
       .then(
         (result) => {
           result.members.sort(function(a, b){
               if(a.to > b.to)
                  return true;
              return a.since < b.since;
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
              <br></br>
          </div>
      )
    }
}

export default MembersPage;
