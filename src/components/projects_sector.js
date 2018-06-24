import React from 'react'
import { Icon } from 'semantic-ui-react'
import '../style/Projects.css'

export default props => {
  return <div id='projects-container'>
    <section id='project-section'>
      <h1>Projetos</h1>
      <h5 id='subtitle-text'><i>Paixão é a nossa marca. ITABits foi criada para centralizar o desenvolvimento de software em um ambiente onde as pessoas possam aprender e produzir juntas!"</i></h5>
      {/*<img src="../assets/images/landing-page/balltris.png" />*/}
      <button class='goto-button'><span>GAMES</span></button>
    </section>
  </div>
}