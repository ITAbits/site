import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

import '../style/TutorialsSector.css'

import CsharpIcon from '../assets/images/landing-page/tutorials/csharp.png'
import DiscordIcon from '../assets/images/landing-page/tutorials/discord.png'

export default props => {
  return (
    <div id='tutorials-container'>
      <section id='tutorials-section'>
        <h3 style={{ marginBottom: 32 }}>TUTORIAIS</h3>
        <p>
          Gostou do que fazemos e ficou interessado no assunto? Sabia que a ITABits possui material disponível online e gratuitamente para você aprender a programar?
        </p>

        <Grid centered stackable columns={2} style={{ marginTop: 16 }}>
          <Grid.Row centered columns={2}>
            <Grid.Column centered>
              <Image id='balloon' ui centered image src={CsharpIcon} />
              <h5>Como programar em C#</h5>
            </Grid.Column>

            <Grid.Column>
              <Image ui centered image src={DiscordIcon} />
              <h5>Como usar o Discord</h5>
            </Grid.Column>

          </Grid.Row>
        </Grid>

        <a href='/tutorials'><button className='goto-button' style={{ marginTop: 32 }}><span>TUTORIAIS</span></button></a>
      </section>
    </div>
  )
}
