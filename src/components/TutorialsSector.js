import React from 'react'
import { Grid, Container, List } from 'semantic-ui-react'

import '../style/TutorialsSector.css'

import CsharpIcon from '../assets/images/landing-page/tutorials/csharp.png'
import DiscordIcon from '../assets/images/landing-page/tutorials/discord.png'

export default props => {
  return (
    <div id='tutorials-container'>
      <section id='tutorials-section'>
        <h3>TUTORIAIS</h3>
        <hr />
        <p>
          Gostou do que fazemos e ficou interessado no assunto? Sabia que a ITABits possui material disponível online e gratuitamente para você aprender a programar?
          Visite já nossos tutoriais e aprenda a programar hoje!
        </p>

        <Grid centered columns={2} verticalAlign='middle'>
          <Grid.Row centered columns={2}>
            <Grid.Column centered>
              <img src={CsharpIcon} />
              <h5>Como programar em C#</h5>
            </Grid.Column>

            <Grid.Column>
              <img src={DiscordIcon} />
              <h5>Como usar o Discord</h5>
            </Grid.Column>

          </Grid.Row>
        </Grid>

        <a href="/tutorials"><button className='goto-button'><span>TUTORIAIS</span></button></a>
      </section>
    </div>
  )
}
